import { BrowserRouter as Router } from 'react-router-dom'
import { Suspense } from 'react'

import { Routes } from './Routes'

export const App = () => {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Router>
        <Routes />
      </Router>
    </Suspense>
  )
}
