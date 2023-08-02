import styled from 'styled-components'
import { FC, ReactNode, useState } from 'react'
import { Layout, theme } from 'antd'

import { Header } from './header'
import { Sider } from './sider'

const { Content } = Layout

const StyledLayout = styled(Layout)`
  min-height: 100vh !important;
`

const StyledContent = styled(Content)`
  margin: 24px 16px;
  padding: 24px;
  min-height: 280px;
`

type MainLayoutPropsType = {
  children: ReactNode
}

const MainLayout: FC<MainLayoutPropsType> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const handleToggleSider = () => setCollapsed(!collapsed)

  return (
    <StyledLayout>
      <Sider collapsed={collapsed} />

      <Layout>
        <Header
          collapsed={collapsed}
          onClick={handleToggleSider}
          colorBgContainer={colorBgContainer}
        />

        <StyledContent
          style={{
            background: colorBgContainer,
          }}
        >
          {children}
        </StyledContent>
      </Layout>
    </StyledLayout>
  )
}

export default MainLayout
