import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Col, Layout, Radio, RadioChangeEvent, Row } from 'antd'
import { FC, useState } from 'react'

import { Color } from 'shared/styles'
import { getUser } from 'app/store/selectors'
import { LANGUAGES } from 'shared/constants'
import { Logo } from 'shared/components'
import { MenuBlock } from 'features/header'
import { useTypedSelector } from 'app/store/hooks'
import {
  AuthBlockWrapper,
  HeaderMenuWrapper,
  HeaderWrapper,
} from '../styledComponents'
import { LoginBlock, LogoutBlock, RegistrationBlock } from 'features/user'

const { Header: AntdHeader } = Layout

const StyledAntdHeader = styled(AntdHeader)`
  padding: 0 120px;
  border-bottom: 1px solid ${Color.gray};
  background-color: ${Color.white};
`

export const Header: FC = () => {
  const [language, setLanguage] = useState(LANGUAGES.ENGLISH)

  const { user } = useTypedSelector(getUser)

  const { i18n } = useTranslation()

  const handleChangeLanguage = (e: RadioChangeEvent) => {
    const lang = e.target.value
    localStorage.setItem('i18n', lang)

    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  return (
    <StyledAntdHeader>
      <HeaderWrapper justify="space-between" align="middle">
        <Col>
          <Row align="middle">
            <Logo />

            <Radio.Group value={language} onChange={handleChangeLanguage}>
              <Radio.Button value={LANGUAGES.RUSSIAN}>Ru</Radio.Button>
              <Radio.Button value={LANGUAGES.ENGLISH}>En</Radio.Button>
              <Radio.Button value={LANGUAGES.SPANISH}>Es</Radio.Button>
            </Radio.Group>
          </Row>
        </Col>

        <HeaderMenuWrapper>
          <MenuBlock />
        </HeaderMenuWrapper>

        <AuthBlockWrapper>
          {user ? (
            <LogoutBlock />
          ) : (
            <>
              <LoginBlock />

              <RegistrationBlock />
            </>
          )}
        </AuthBlockWrapper>
      </HeaderWrapper>
    </StyledAntdHeader>
  )
}
