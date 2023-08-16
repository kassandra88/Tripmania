import { LinkProps } from 'react-router-dom'
import { ReactNode } from 'react'

import { EditOutlined, HomeOutlined } from '@ant-design/icons'

import { HEADER_MENU_ITEMS, PAGES_URLS } from 'shared/constants'

export type MenuItemsType = {
  key: string
  linkProps: LinkProps
  onClick?: () => void
  label?: string
  icon: ReactNode
}

export const getMenuItems = (): MenuItemsType[] => [
  {
    key: HEADER_MENU_ITEMS.FEED,
    linkProps: {
      children: HEADER_MENU_ITEMS.FEED,
      to: PAGES_URLS.FEED_PADE_URL,
    },
    icon: <HomeOutlined />,
  },
  {
    key: HEADER_MENU_ITEMS.USER_POSTS,
    linkProps: {
      children: HEADER_MENU_ITEMS.USER_POSTS,
      to: PAGES_URLS.USER_POSTS_URL,
    },
    icon: <EditOutlined />,
  },
]
