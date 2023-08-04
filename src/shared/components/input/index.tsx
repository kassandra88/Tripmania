import { Input as AntdInput } from 'antd'
import { FC } from 'react'
import styled from 'styled-components'

import { Spacing } from 'shared/styles'

const StyledInput = styled(AntdInput)`
  width: 80%;
  height: 40px;
  width: 400px;
  margin-bottom: 16px;
  border-radius: ${Spacing.sm4};
`

type InputPropsType = {
  name?: string
  ariaLabel?: string
  value?: string
  onChange?: (e: any) => void
  onBlur?: (e: any) => void
  status?: '' | 'warning' | 'error' | undefined
}

export const Input: FC<InputPropsType> = ({
  name,
  ariaLabel,
  value,
  status,
  onChange,
  onBlur,
}) => {
  return (
    <StyledInput
      name={name}
      aria-label={ariaLabel}
      value={value}
      status={status}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}
