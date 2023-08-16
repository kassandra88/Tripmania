import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../reducers'

// Custom React hook to access the Redux state with the correct type (RootState).
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
