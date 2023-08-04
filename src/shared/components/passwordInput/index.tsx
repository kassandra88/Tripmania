import { FC } from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

import { Spacing } from 'shared/styles'

const StyledInput = styled(Input.Password)`
  width: 80%;
  height: 40px;
  width: 400px;
  margin-bottom: 8px;
  border-radius: ${Spacing.sm4};
`

type PasswordInputPropsType = {
  name?: string
  ariaLabel?: string
  value?: string
  iconRender?: (visible: any) => JSX.Element
  onChange: (e: any) => void
  onBlur?: (e: any) => void
  status?: '' | 'warning' | 'error' | undefined
}

export const PasswordInput: FC<PasswordInputPropsType> = ({
  name,
  ariaLabel,
  value,
  status,
  onChange,
  onBlur,
  iconRender,
}) => {
  return (
    <StyledInput
      name={name}
      aria-label={ariaLabel}
      value={value}
      status={status}
      onChange={onChange}
      onBlur={onBlur}
      iconRender={iconRender}
    />
  )
}
