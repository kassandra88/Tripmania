import { ReactNode } from 'react'
import { t } from 'i18next'
import { Link, LinkProps } from 'react-router-dom'
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'

import { MENU_ITEM_NAMES, PAGES_URLS } from 'shared/constants'

export type SiderMenuItemsType = {
  key: string
  linkProps: LinkProps
  onClick?: never
  label?: ReactNode
  icon: ReactNode
  isDisabled?: boolean
}

export const getSiderMenuItems = () => [
  {
    key: MENU_ITEM_NAMES.PROFILE,
    icon: <UserOutlined />,
    label: (
      <Link to={`${PAGES_URLS.HOME_PAGE_URL}`}>
        {t(MENU_ITEM_NAMES.PROFILE)}
      </Link>
    ),
  },
  {
    key: MENU_ITEM_NAMES.PLACES,
    icon: <VideoCameraOutlined />,
    label: (
      <Link to={`${PAGES_URLS.HOME_PAGE_URL}`}>
        {t(MENU_ITEM_NAMES.PLACES)}
      </Link>
    ),
  },
  {
    key: MENU_ITEM_NAMES.ACCOMMODATION,
    icon: <UploadOutlined />,
    label: (
      <Link to={`${PAGES_URLS.HOME_PAGE_URL}`}>
        {t(MENU_ITEM_NAMES.ACCOMMODATION)}
      </Link>
    ),
  },
]
