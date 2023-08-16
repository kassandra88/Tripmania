import { combineReducers } from '@reduxjs/toolkit'
import { notificationsReducer } from '../../../shared/store/systemNotifications/reducers'
import { userReducer } from '../../../entites/user/store'

// Combine all your individual reducers into a single root reducer
const rootReducer = combineReducers({
  user: userReducer,
  notifications: notificationsReducer,
})

// Define the RootState type by using the ReturnType of the root reducer
export type RootState = ReturnType<typeof rootReducer>

// Export the root reducer as the default export
export default rootReducer
