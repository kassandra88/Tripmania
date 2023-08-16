import { FC } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd'

import { getMenuItems } from './menuItems'
import { HeaderMenuContainer } from '../styledComponents'
import { MenuItem } from './menuItem'

export const MenuBlock: FC = () => {
  return (
    <HeaderMenuContainer>
      {getMenuItems().map(({ linkProps, icon, key }) => {
        return (
          <MenuItem
            key={key}
            label={`${linkProps.children}`}
            to={`${linkProps.to}`}
            icon={icon}
          />
        )
      })}
    </HeaderMenuContainer>
  )
}
