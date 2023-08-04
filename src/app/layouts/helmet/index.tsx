import { FC } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { APP_TITLE } from 'shared/constants'

export type AppHelmetPropsType = {
  pageTitle?: string
}

export const AppHelmet: FC<AppHelmetPropsType> = ({ pageTitle }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {pageTitle} | {APP_TITLE}
        </title>
      </Helmet>
    </HelmetProvider>
  )
}
