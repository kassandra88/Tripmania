import HomePage from 'pages/homePage'
import { PAGES_URLS } from 'shared/constants'

export const getPrivateRoutes = () => [
  {
    path: PAGES_URLS.HOME_PAGE_URL,
    element: <HomePage />,
    index: true,
  },
]
