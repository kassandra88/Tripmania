import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { Button, Layout, Radio, RadioChangeEvent } from 'antd'
import { FC, useState } from 'react'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

import { LANGUAGES } from 'shared/constants'

const { Header: AntdHeader } = Layout

const StyledToggleSiderButton = styled(Button)`
  font-size: 16px !important;
  width: 64px !important;
  height: 64px !important;
`

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
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(LANGUAGES.ENGLISH)

  const handleChangeLanguage = (e: RadioChangeEvent) => {
    const lang = e.target.value
    localStorage.setItem('i18n', lang)

    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  return (
    <AntdHeader style={{ padding: 0, background: colorBgContainer }}>
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
    </AntdHeader>
  )
}
