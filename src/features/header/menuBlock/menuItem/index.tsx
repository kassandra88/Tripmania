import { Link } from 'react-router-dom'
import { Typography } from 'antd'
import { FC, ReactNode } from 'react'

import { StyledMenuItem } from 'features/header/styledComponents'
import { useTranslation } from 'react-i18next'

const { Text } = Typography

export type MenuItemPropsType = {
  key: string
  label: string
  to: string
  icon: ReactNode
}

export const MenuItem: FC<MenuItemPropsType> = ({ key, label, icon, to }) => {
  const { t } = useTranslation()

  return (
    <Link to={to}>
      <StyledMenuItem key={key}>
        {icon}
        <Text>{t(label)}</Text>
      </StyledMenuItem>
    </Link>
  )
}
