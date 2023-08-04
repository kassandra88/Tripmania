import { FC } from 'react'
import { Layout, Menu } from 'antd'

import { getSiderMenuItems } from './siderMenuItems'
import { LogoSection } from '../logoSection'
import { MENU_ITEM_NAMES } from 'shared/constants'

const { Sider: AntdSider } = Layout

type SiderPropsType = {
  collapsed: boolean
}

export const Sider: FC<SiderPropsType> = ({ collapsed }) => {
  return (
    <AntdSider trigger={null} collapsible collapsed={collapsed}>
      <LogoSection />

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[MENU_ITEM_NAMES.PROFILE]}
        items={getSiderMenuItems()}
      />
    </AntdSider>
  )
}
