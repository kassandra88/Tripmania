import { FC } from 'react'
import styled from 'styled-components'

const StyledLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 4px;
  }
`

export const Logo: FC = () => {
  return (
    <StyledLogoWrapper>
      <img src="images/logo.jpg" alt="logo" />
    </StyledLogoWrapper>
  )
}
