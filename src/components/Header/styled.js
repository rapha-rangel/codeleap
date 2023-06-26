import styled from "styled-components";
import {root, responsive} from '../../styled';

export const Container = styled.div`
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
export const Title = styled.a`
  font-size: ${root.h3FontSize};
  font-weight:${root.fontSemiBold};
  color: ${root.containerColor};
  text-decoration: none;
  cursor: pointer;
  @media ${responsive.exLarge} {
    font-size: ${root.h1FontSize};
  }
`
export const Status = styled.div`
 display: flex;
 justify-content: center;
`
export const User = styled.h3`
  font-size: ${root.h3FontSize};
  font-weight:${root.fontSemiBold};
  color: ${root.containerColor};
  margin-right: ${root.mb05};
  @media ${responsive.exLarge} {
    font-size: ${root.h1FontSize};
  }
`
export const Logo = styled.a`
  color: ${root.containerColor};
  font-size: ${root.h1FontSize};
  cursor: pointer;
  @media ${responsive.exLarge} {
    font-size: ${root.bigFontSize};
  }
`