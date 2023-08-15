import styled from 'styled-components'
import { Col, Row } from 'antd'

export const HeaderMenuContainer = styled(Row)`
  height: 100%;
  a {
    height: 100%;
    color: #222;
  }
`

export const StyledMenuItem = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: 100% !important;
  margin-right: 8px;
  padding: 12px 0;

  span {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`
