import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { UserType } from 'entites/user/types'

interface IUserStateType {
  user: UserType | undefined
  token: string | undefined
  isLoading: boolean
  error: string | null
}

// Define the initial state for the user slice of the Redux store
const initialState: IUserStateType = {
  user: undefined,
  token: undefined,
  isLoading: false,
  error: null,
}

// Create a Redux slice for managing user-related data
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Registration actions
    registrationStart(state) {
      state.isLoading = true
      state.error = null
    },
    registrationSuccess(state, action: PayloadAction<string>) {
      state.token = action.payload
      state.isLoading = false
    },
    registrationFailure(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    // Login actions
    loginStart(state) {
      state.isLoading = true
      state.error = null
    },
    loginSuccess(state, action: PayloadAction<string>) {
      state.token = action.payload
      state.isLoading = false
    },
    loginFailure(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
    // User actions
    getUserStart(state) {
      state.isLoading = true
      state.error = null
    },
    getUserSuccess(state, action: PayloadAction<UserType>) {
      state.user = action.payload
      state.isLoading = false
    },
    getUserFailure(state, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {
  registrationStart,
  registrationSuccess,
  registrationFailure,
  loginStart,
  loginSuccess,
  loginFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
} = userSlice.actions

export const userReducer = userSlice.reducer
