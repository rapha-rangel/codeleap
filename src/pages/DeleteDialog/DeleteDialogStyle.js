import styled from 'styled-components';
import { responsive, root, openModalAnimation } from '../../components/styled';

export const Section =styled.section`
  position: fixed;
  z-index: ${root.zModal};
  top: 30%;
  width: 100vw;
`
export const ContainerDelete = styled.div`
  border: none;
  background-color: ${root.containerColor};
  padding: 1rem;
  border-radius: 10px ;
  animation: ${openModalAnimation} 2s forwards;
  @media ${responsive.medium} {
    max-width: 600px;
    margin: auto;
  }
` 
export const Content = styled.div`
  display: grid;
`
export const Title = styled.h3`
  font-size: ${root.smallFontSize};
  font-weight: ${root.fontMedium};
  margin-bottom: ${root.mb15};
  @media ${responsive.large} {
    font-size: ${root.h3FontSize};
    margin-bottom: ${root.mb2};
  }
  @media ${responsive.exLarge} {
    font-size: ${root.h1FontSize};
    margin-bottom: ${root.mb25};
  }
`

export const DeleteButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
`
export const DeleteButton = styled.a`
  display: flex;
  justify-content: center;
  width: 4rem;
  align-items: center;
  font-size: ${root.smallerFontSize};
  transition: 0.5s;
  cursor: pointer;
  padding: 0.5rem;
  border: none;
  background-color: ${root.deleteButtonColor};
  color: ${root.containerColor};
  border-radius: 5px;
  @media ${responsive.large} {
    font-size: ${root.normalFontSize};
  }
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
    width:5rem;
  }
`
export const CancelButton = styled.a`
  display: flex;
  justify-content: center;
  width: 4rem;
  font-size: ${root.smallerFontSize};
  cursor: pointer;
  padding: 0.5rem;
  border: solid black 1px;
  background-color: ${root.containerColor};
  color: ${root.titleColor};
  border-radius: 5px;
  @media ${responsive.large} {
    font-size: ${root.normalFontSize};
  }
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
    width: 5rem;
  }
`