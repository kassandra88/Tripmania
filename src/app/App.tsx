import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense, useEffect } from 'react'

import { getCurrentUser } from 'entites/user/store'
import { getUser } from './store/selectors'
import { Routes } from './Routes'
import { useTypedDispatch, useTypedSelector } from './store/hooks'

export const App = () => {
  const { user, token } = useTypedSelector(getUser)

  const dispatch = useTypedDispatch()

  useEffect(() => {
    if (!user && token) {
      dispatch(getCurrentUser())
    }
  }, [dispatch, token, user])

  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  )
}
