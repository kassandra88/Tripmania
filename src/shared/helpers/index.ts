import { AxiosError } from 'axios'

import { Error } from 'shared/types'

export const getServerErrorMessage = (error: AxiosError<Error>) =>
  error.response?.data?.message || `Something went wrong! Details: ${error}`

export const getErrorMessage = (error: AxiosError<Error>) =>
  error.message || 'Something went wrong'

export const getServerMessage = (error: any) =>
  error.response?.data?.message || ``
