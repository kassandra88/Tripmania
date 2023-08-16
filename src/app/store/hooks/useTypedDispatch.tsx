import { AppDispatch } from '../../store'
import { useDispatch } from 'react-redux'

// Custom React hook to obtain the Redux dispatch function with the correct type (AppDispatch).
export const useTypedDispatch = () => useDispatch<AppDispatch>()
