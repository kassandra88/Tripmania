import { useTranslation } from 'react-i18next'
import { Col, Layout, Radio, RadioChangeEvent, Row } from 'antd'
import { FC, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { LANGUAGES } from 'shared/constants'
import { AuthBlockWrapper, StyledToggleSiderButton } from '../styledComponents'
import { LoginBlock, RegistrationBlock } from 'features/auth'

const { Header: AntdHeader } = Layout

type HeaderPropsType = {
  collapsed: boolean
  onClick: () => void
  colorBgContainer: string
}

export const Header: FC<HeaderPropsType> = ({
  collapsed,
  onClick,
  colorBgContainer,
}) => {
  const [language, setLanguage] = useState(LANGUAGES.ENGLISH)

  const { i18n } = useTranslation()

  const handleChangeLanguage = (e: RadioChangeEvent) => {
    const lang = e.target.value
    localStorage.setItem('i18n', lang)

    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  return (
    <AntdHeader style={{ padding: 0, background: colorBgContainer }}>
      <Row justify="space-between">
        <Col>
          <StyledToggleSiderButton
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onClick}
          />

          <Radio.Group value={language} onChange={handleChangeLanguage}>
            <Radio.Button value={LANGUAGES.RUSSIAN}>Ru</Radio.Button>
            <Radio.Button value={LANGUAGES.ENGLISH}>En</Radio.Button>
            <Radio.Button value={LANGUAGES.SPANISH}>Es</Radio.Button>
          </Radio.Group>
        </Col>

        <AuthBlockWrapper>
          <LoginBlock />

          <RegistrationBlock />
        </AuthBlockWrapper>
      </Row>
    </AntdHeader>
  )
}
