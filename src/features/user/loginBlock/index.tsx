import { FC, useState } from 'react'

import { FormModal } from 'shared/components'
import { LoginForm } from 'entites/user'
import { loginUser } from 'entites/user/store'
import { StyledLoginButton } from '../styledComponents'
import { UserLoginType } from 'entites/user/types'
import { useTypedDispatch } from 'app/store/hooks'

export const LoginBlock: FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const dispatch = useTypedDispatch()

  const showModal = () => setIsModalVisible(true)

  const handleCancelModal = () => setIsModalVisible(false)

  const handleLogin = (values: UserLoginType) => {
    dispatch(loginUser(values))
  }

  const handleCancelForm = () => {}

  return (
    <FormModal
      form={
        <LoginForm onSubmitForm={handleLogin} onCancelForm={handleCancelForm} />
      }
      trigger={
        <StyledLoginButton type="primary" onClick={showModal}>
          Login
        </StyledLoginButton>
      }
      isModalOpen={isModalVisible}
      handleCancel={handleCancelModal}
    />
  )
}
