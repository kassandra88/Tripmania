import { notification } from 'antd'
import { FC, useCallback, useEffect } from 'react'

import { getNotifications } from 'shared/store/selectors'
import { NotificationType } from 'shared/types'
import { removeNotification } from 'shared/store/systemNotifications'
import { Spacing } from 'shared/styles'
import { useTypedDispatch, useTypedSelector } from '../store/hooks'

export const SistemNotifications: FC = () => {
  const { message, msgType } = useTypedSelector(getNotifications)

  const dispatch = useTypedDispatch()

  const showNotification = useCallback(
    (msg: string, type: NotificationType) => {
      notification[type]({
        message: msg,
        description: '',
        placement: 'bottomRight',
        style: { borderRadius: Spacing.sm8 },
      })
    },
    [],
  )

  useEffect(() => {
    if (message) {
      showNotification(message, msgType)
      setTimeout(() => dispatch(removeNotification()), 3000)
    }
  }, [dispatch, showNotification, message, msgType])

  return (
    <div
      style={{
        display: 'none',
        position: 'absolute',
        width: '10px',
        height: '10px',
      }}
    />
  )
}
