import { FC } from 'react'
import { useRoutes } from 'react-router-dom'

import { getPublicRoutes } from './PublicRoutes'

export const Routes: FC = () => {
  const routes = useRoutes([...getPublicRoutes()])

  return routes
}
