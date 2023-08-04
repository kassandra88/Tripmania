import { FC } from 'react'

import { Button as AntdButton } from 'antd'

type ButtonPropsType = {
  children: string
}

export const Button: FC<ButtonPropsType> = ({ children }) => {
  return <AntdButton>{children}</AntdButton>
}
