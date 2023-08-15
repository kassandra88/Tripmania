import { Layout } from 'antd'
import styled from 'styled-components'
import { FC, ReactNode } from 'react'

import { AppHelmet } from '../helmet'
import { Header } from '../../../widgets/layouts/header'
import { SistemNotifications } from 'app/sistemNotifications'

const { Content } = Layout

const StyledLayout = styled(Layout)`
  min-height: 100vh !important;
`

const StyledContent = styled(Content)`
  padding: 20px 120px;
`

type MainLayoutPropsType = {
  children: ReactNode
  pageTitle: string
}

export const MainLayout: FC<MainLayoutPropsType> = ({
  children,
  pageTitle,
}) => {
  return (
    <StyledLayout>
      <SistemNotifications />

      <AppHelmet pageTitle={pageTitle} />

      <Header />

      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  )
}
