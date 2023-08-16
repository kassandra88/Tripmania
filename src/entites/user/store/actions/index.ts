import axios, { AxiosError, AxiosResponse } from 'axios'

import api from 'shared/api'
import { AppDispatch } from 'app/store'
import buildURL from 'shared/utils/url-builder'
import { Error } from 'shared/types'
import { getErrorMessage } from 'shared/helpers'
import { showErrorNotification } from 'shared/store/systemNotifications'
import {
  AUTH_ENDPOINT,
  BASE_URL,
  LOGIN_ENDPOINT,
  ME_ENDPOINT,
  REGISTRATION_ENDPOINT,
  USERS_ENDPOINT,
} from 'env'
import {
  getUserFailure,
  getUserStart,
  getUserSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  registrationFailure,
  registrationStart,
  registrationSuccess,
} from '../reducers'
import { UserLoginType, UserRegistrationType } from 'entites/user/types'

export const registerUser =
  (userData: UserRegistrationType) => (dispatch: AppDispatch) => {
    dispatch(registrationStart())

    api
      .post(buildURL(AUTH_ENDPOINT, REGISTRATION_ENDPOINT), userData)
      .then((response: AxiosResponse) => {
        dispatch(registrationSuccess(response.data?.token))
      })
      .catch((error: AxiosError<Error>) => {
        dispatch(registrationFailure(getErrorMessage(error)))
        dispatch(showErrorNotification(error))
      })
  }

export const loginUser =
  (userData: UserLoginType) => (dispatch: AppDispatch) => {
    dispatch(loginStart())

    api
      .post(buildURL(AUTH_ENDPOINT, LOGIN_ENDPOINT), userData)
      .then((response: AxiosResponse) => {
        dispatch(loginSuccess(response.data?.token))
      })
      .catch((error: AxiosError<Error>) => {
        dispatch(loginFailure(getErrorMessage(error)))
        dispatch(showErrorNotification(error))
      })
  }

export const getCurrentUser = () => (dispatch: AppDispatch) => {
  dispatch(getUserStart())

  api
    .get(buildURL(USERS_ENDPOINT, ME_ENDPOINT))
    .then((response: AxiosResponse) => {
      dispatch(getUserSuccess(response.data))
    })
    .catch((error: AxiosError<Error>) => {
      dispatch(getUserFailure(getErrorMessage(error)))
      dispatch(showErrorNotification(error))
    })
}

export const getCurrentUser2 =
  (token: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getUserStart())

      const headers = {
        headers: {
          authorization: token,
        },
      }

      const response = await axios.get(
        buildURL(BASE_URL, USERS_ENDPOINT, ME_ENDPOINT),
        headers,
      )

      dispatch(getUserSuccess(response.data))
    } catch (error: any) {
      dispatch(getUserFailure(getErrorMessage(error)))
      dispatch(showErrorNotification(error))
    }
  }
