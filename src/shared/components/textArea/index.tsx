import { FC } from 'react'
import { Input } from 'antd'
import styled from 'styled-components'

import { Spacing } from 'shared/styles'

const { TextArea: AntdTextArea } = Input

const StyledTextarea = styled(AntdTextArea)`
  width: 80%;
  height: 40px;
  width: 400px;
  margin-bottom: 16px;
  border-radius: ${Spacing.sm4};
`

type TextAreaPropsType = {
  name?: string
  ariaLabel?: string
  value?: string
  rows?: number
  onChange?: (e: any) => void
  onBlur?: (e: any) => void
  status?: '' | 'warning' | 'error' | undefined
}

export const TextArea: FC<TextAreaPropsType> = ({
  name,
  ariaLabel,
  value,
  status,
  rows = 4,
  onChange,
  onBlur,
}) => {
  return (
    <StyledTextarea
      name={name}
      aria-label={ariaLabel}
      value={value}
      status={status}
      rows={rows}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}
