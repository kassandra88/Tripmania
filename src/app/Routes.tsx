import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { getPrivateRoutes } from './PrivateRoutes'

export const Routes: FC = () => {
  const routes = useRoutes([...getPrivateRoutes()])

  return routes
}
