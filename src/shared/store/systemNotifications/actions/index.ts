import { AxiosError, AxiosResponse } from 'axios'

import { addNotification } from '../'
import { AppDispatch } from 'app/store'
import { Error } from 'shared/types'
import { getServerErrorMessage, getServerMessage } from 'shared/helpers'

export const showErrorNotification =
  (error: AxiosError<Error>) => (dispatch: AppDispatch) => {
    dispatch(
      addNotification({ message: getServerErrorMessage(error), type: 'error' }),
    )
  }

export const showSystemNotification =
  (response: AxiosResponse) => (dispatch: AppDispatch) => {
    dispatch(
      addNotification({ message: getServerMessage(response), type: 'success' }),
    )
  }
