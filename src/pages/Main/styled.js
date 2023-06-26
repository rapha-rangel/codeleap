import styled from 'styled-components';
import { buttonFeedAnimation, responsive, root} from '../../styled';

export const Section = styled.section`
  margin: auto;
  margin-top: 4rem;
  padding-top: 1rem;
  background-color: ${root.containerColor};
  filter:${props =>props.backMain ? "blur(4px)": "blur(0)"};
  opacity: ${props =>props.backMain ? "0.3": "1"};
  @media ${responsive.medium} {
    max-width: 600px;
    margin-top: 4.5rem;
    padding-top: 1.5rem
  }
`
export const Header = styled.div`
  position: fixed;
  top: 0;
  left:50%;
  transform: translate(-50%, 0);
  z-index: 10;
  width: 100%;
  background-color: ${root.headerColor};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${responsive.medium} {
    max-width: 600px;
    margin: auto;

  }
`
export const HeaderTitle = styled.a`
  font-size: ${root.h3FontSize};
  font-weight:${root.fontSemiBold};
  color: ${root.containerColor};
  text-decoration: none;
  cursor: pointer;
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


