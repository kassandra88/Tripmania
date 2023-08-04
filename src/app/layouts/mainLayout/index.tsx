import styled from 'styled-components'
import { FC, ReactNode, useState } from 'react'
import { Layout, theme } from 'antd'

import { AppHelmet } from '../helmet'
import { Header } from '../../../widgets/layouts/header'
import { Sider } from '../../../widgets/layouts/sider'

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
  pageTitle: string
}

export const MainLayout: FC<MainLayoutPropsType> = ({
  children,
  pageTitle,
}) => {
  const [collapsed, setCollapsed] = useState(false)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const handleToggleSider = () => setCollapsed(!collapsed)

  return (
    <StyledLayout>
      <AppHelmet pageTitle={pageTitle} />

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
