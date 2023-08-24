import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PostType } from 'entites/posts/types'

interface IPostsStateType {
  posts: PostType[] | undefined
  isLoading: boolean
  error: string | null
}

// Define the initial state for the posts slice of the Redux store
const initialState: IPostsStateType = {
  posts: undefined,
  isLoading: false,
  error: null,
}

// Create a Redux slice for managing posts-related data
const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPostsStart(state) {
      state.isLoading = true
      state.error = null
    },

    loadPostsSuccess(state, action: PayloadAction<PostType[]>) {
      state.posts = action.payload
      state.isLoading = false
    },

    loadPostsFailure(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },

    createPostStart(state) {
      state.isLoading = true
      state.error = null
    },

    createPostSuccess(state, action: PayloadAction<PostType>) {
      state.posts?.push(action.payload)
      state.isLoading = false
    },

    createPostFailure(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export const {
  loadPostsStart,
  loadPostsSuccess,
  loadPostsFailure,
  createPostStart,
  createPostSuccess,
  createPostFailure,
} = postsSlice.actions

export const postsReducer = postsSlice.reducer
