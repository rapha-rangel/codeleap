import styled from "styled-components"
import { root, showFeed, responsive } from "../../Styled/styled"

export const Container = styled.div`
  position: relative;
  border: solid 1px black;
  animation: ${props => props.animation ? showFeed :"none"}  ;
  animation-duration: 2s;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: ${root.containerColor};
  border-radius: 10px ;
  margin-bottom: ${root.mb1};
  :nth-last-of-type(1n+3){
    animation: none;
  }
` 
export const Header = styled.div`
  background-color: ${root.headerColor};
  padding: 0.5rem 1rem ;
  margin-bottom: ${root.mb1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius:8px;
  border-top-left-radius: 8px;
`
export const HeaderTitle = styled.h3`
  font-size: ${root.smallFontSize};
  font-weight: ${root.fontMedium};
  color: ${root.containerColor};
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
  }
`
export const HeaderStatus = styled.div`
 display: flex;
 align-items: center;
`
export const HeaderLogo = styled.a`
  color: ${root.containerColor};
  font-size: ${root.normalFontSize};
  margin-right: 1rem;
  cursor: pointer;
  @media ${responsive.exLarge} {
    font-size: ${root.h2FontSize};
  }
`

export const Content = styled.div`
  display: grid;
  padding: 0 1rem 0.5rem 1rem;
` 
export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${root.mb05};
`

export const User = styled.p`
font-size: ${root.smallerFontSize};
font-weight: ${root.fontMedium};
color: ${root.textColorBlock};
@media ${responsive.exLarge} {
    font-size: ${root.normalFontSize};
  }
`
export const Time = styled.p`
font-size: ${root.smallerFontSize};
font-weight: ${root.fontMedium};
color: ${root.textColorBlock};
@media ${responsive.exLarge} {
    font-size: ${root.normalFontSize};
  }
`
export const ContentData = styled.p`
  font-size: ${root.normalFontSize};
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
  }
`