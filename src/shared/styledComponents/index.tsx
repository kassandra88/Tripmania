import styled from 'styled-components'

import { Color } from 'shared/styles'
import { Row } from 'antd'

export const RequiredFieldStarLabel = styled.span`
  color: ${Color.gray};
`

export const ModalFormWrapper = styled(Row)`
  width: 440px;
  padding: 20px;
  margin: 20px 0;
`
