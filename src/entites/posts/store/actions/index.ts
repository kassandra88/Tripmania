import { AxiosError, AxiosResponse } from 'axios'

import api from 'shared/api'
import { AppDispatch } from 'app/store'
import buildURL from 'shared/utils/url-builder'
import { CreatePostFormType } from 'entites/posts/types'
import { Error } from 'shared/types'
import { getErrorMessage } from 'shared/helpers'
import { POSTS_ENDPOINT } from 'env'
import { showErrorNotification } from 'shared/store/systemNotifications'
import {
  createPostFailure,
  createPostStart,
  createPostSuccess,
  loadPostsFailure,
  loadPostsStart,
  loadPostsSuccess,
} from '../reducers'

export const loadPosts = () => (dispatch: AppDispatch) => {
  dispatch(loadPostsStart())

  api
    .get(buildURL(POSTS_ENDPOINT))
    .then((response: AxiosResponse) => {
      dispatch(loadPostsSuccess(response.data))
    })
    .catch((error: AxiosError<Error>) => {
      dispatch(loadPostsFailure(getErrorMessage(error)))
      dispatch(showErrorNotification(error))
    })
}

export const createPost =
  (post: CreatePostFormType) => (dispatch: AppDispatch) => {
    dispatch(createPostStart())

    api
      .post(buildURL(POSTS_ENDPOINT), post)
      .then((response: AxiosResponse) => {
        dispatch(createPostSuccess(response.data))
      })
      .catch((error: AxiosError<Error>) => {
        dispatch(createPostFailure(getErrorMessage(error)))
        dispatch(showErrorNotification(error))
      })
  }
