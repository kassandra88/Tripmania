import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

import { BASE_URL } from 'env'
import store from '../../app/store'

export const DEFAULT_AXIOS_CONFIG: AxiosRequestConfig = {
  timeout: 60000,
  baseURL: BASE_URL,
  responseType: 'json',
}

const createApi = (extra: AxiosRequestConfig = {}): AxiosInstance =>
  axios.create({
    ...DEFAULT_AXIOS_CONFIG,
    ...extra,
  })

const api = createApi()

api.interceptors.request.use(
  (config) => {
    const token = store.getState()?.user?.token

    if (token) {
      config.headers['Authorization'] = token
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default api
