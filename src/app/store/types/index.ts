import { Action, ThunkAction } from '@reduxjs/toolkit'

import { RootState } from '../reducers'

// Define a custom type 'AppThunk' to represent Redux Thunks.
// 'ReturnType' is a generic parameter that represents the return type of the thunk.
// It is inferred when the thunk is used, and by default, it is set to 'void'.

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export type IdBDType = {
  _id?: string
}

export type IdStringType = {
  id?: string
}
