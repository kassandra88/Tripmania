import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { NotificationType } from 'shared/types'

type INotificationsStateType = {
  message: string | undefined
  msgType: NotificationType
}

const initialState: INotificationsStateType = {
  message: undefined,
  msgType: 'info',
}

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification(
      state,
      action: PayloadAction<{ message: string; type: NotificationType }>,
    ) {
      state.message = action.payload.message
      state.msgType = action.payload.type
    },
    removeNotification(state) {
      state.message = undefined
      state.msgType = 'info'
    },
  },
})

export const { addNotification, removeNotification } =
  notificationsSlice.actions

export const notificationsReducer = notificationsSlice.reducer
