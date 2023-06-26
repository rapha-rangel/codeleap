import styled from 'styled-components';
import { buttonFeedAnimation, responsive, root, showFeed } from '../../components/GlobalStyled/styled';

export const Section = styled.section`
  margin: auto;
  background-color: ${root.containerColor};
  filter:${props =>props.backMain ? "blur(4px)": "blur(0)"};
  opacity: ${props =>props.backMain ? "0.3": "1"};
  @media ${responsive.medium} {
    max-width: 600px;
  }

`
export const Header = styled.div`
  background-color: ${root.headerColor};
  padding: 1rem;
  margin-bottom: ${root.mb1};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderTitle = styled.h2`
  font-size: ${root.h3FontSize};
  font-weight:${root.fontSemiBold};
  color: ${root.containerColor};
  @media ${responsive.exLarge} {
    font-size: ${root.h1FontSize};
  }
`
export const HeaderStatus = styled.div`
 display: flex;
 justify-content: center;
`
export const HeaderUser = styled.h3`
  font-size: ${root.h3FontSize};
  font-weight:${root.fontSemiBold};
  color: ${root.containerColor};
  margin-right: ${root.mb05};
  @media ${responsive.exLarge} {
    font-size: ${root.h1FontSize};
  }
`
export const HeaderLogo = styled.a`
  color: ${root.containerColor};
  font-size: ${root.h1FontSize};
  cursor: pointer;
  @media ${responsive.exLarge} {
    font-size: ${root.bigFontSize};
  }
`

export const ContainerData = styled.div`
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
export const HeaderData = styled.div`
  background-color: ${root.headerColor};
  padding: 0.5rem 1rem ;
  margin-bottom: ${root.mb1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top-right-radius:8px;
  border-top-left-radius: 8px;
`
export const HeaderDataTitle = styled.h3`
  font-size: ${root.smallFontSize};
  font-weight: ${root.fontMedium};
  color: ${root.containerColor};
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
  }
`
export const HeaderDataStatus = styled.div`
 display: flex;
 align-items: center;
`
export const HeaderDataLogo = styled.a`
  color: ${root.containerColor};
  font-size: ${root.normalFontSize};
  margin-right: 1rem;
  cursor: pointer;
  @media ${responsive.exLarge} {
    font-size: ${root.h2FontSize};
  }
`

export const ContentData = styled.div`
  display: grid;
  padding: 0 1rem 0.5rem 1rem;
` 
export const InfoData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${root.mb05};
`

export const UserData = styled.p`
font-size: ${root.smallerFontSize};
font-weight: ${root.fontMedium};
color: ${root.textColorBlock};
@media ${responsive.exLarge} {
    font-size: ${root.normalFontSize};
  }
`
export const TimeData = styled.p`
font-size: ${root.smallerFontSize};
font-weight: ${root.fontMedium};
color: ${root.textColorBlock};
@media ${responsive.exLarge} {
    font-size: ${root.normalFontSize};
  }
`
export const ContentDataContent = styled.p`
  font-size: ${root.normalFontSize};
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
  }
`

export const MoreFeedButton =styled.a`
  position: relative;
  display: flex;
  animation: ${props => props.animation ? buttonFeedAnimation: "none"} ;
  animation-duration: 2s;
  align-items: center;
  justify-content: center;
  font-size: ${root.smallerFontSize};
  transition: 1s;
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  background-color: ${root.headerColor};
  color: ${root.containerColor};
  border-radius: 5px;
  @media ${responsive.large} {
    font-size: ${root.normalFontSize};
  }
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
  }
`


