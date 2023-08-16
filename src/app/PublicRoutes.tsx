import { Navigate } from 'react-router-dom'
import { PAGES_URLS } from 'shared/constants'

import HomePage from 'pages/homePage'

export const getPublicRoutes = () => [
  {
    path: PAGES_URLS.HOME_PAGE_URL,
    element: <Navigate replace to={PAGES_URLS.FEED_PADE_URL} />,
    index: true,
  },
  {
    path: PAGES_URLS.FEED_PADE_URL,
    element: <HomePage />,
  },
]
