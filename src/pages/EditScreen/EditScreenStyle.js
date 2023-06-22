import styled from 'styled-components';
import { responsive, root, openModalAnimation } from '../../components/styled';

export const Section =styled.section`
  position: fixed;
  z-index: ${root.zModal};
  top: 30%;
  width: 100vw;
`
export const ContainerEdit = styled.div`
  border: none;
  background-color: ${root.containerColor};
  padding: 1rem;
  border-radius: 10px ;
  animation: ${openModalAnimation } 2s forwards;
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
export const InputTitle = styled.input`
  font-size: ${root.smallerFontSize};
  margin-bottom: ${root.mb1};
  display: block;
  border: none;
  border-radius: 5px;
  align-items: center;
  padding: 0.5rem;
  transition: all 0.5s;
  background-color: ${root.containerColor};
  box-shadow: 0px 3px 5px 0px gray;
  :focus-visible{ 
    outline: none;
  }
  @media ${responsive.large} {
    font-size: ${root.normalFontSize};
  }
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
  }
`
export const LabelTitle = styled.label`
  font-size: ${root.smallerFontSize};
	font-weight: ${root.fontSemiBold};
  top: -3.5rem;
	position:relative;
	left:0.5rem;
	color: ${root.textColorBlock};
	background-color: transparent;
	transition: 1s;
	${InputTitle}:focus ~ & {
    color: ${root.titleColor};
	}
  @media ${responsive.large} {
    font-size: ${root.normalFontSize};
    top: -3.8rem;

  }
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
    top: -4.2rem;
  }
`
export const TextareaContent = styled.textarea`
  margin-bottom: ${root.smallerFontSize};
  display: block;
  border: none;
  border-radius: 5px;
  align-items: center;
  padding: 0.5rem;
  transition: all 0.5s;
  background-color: ${root.containerColor};
  box-shadow: 0px 3px 5px 0px gray;
  :focus-visible{ 
    outline: none;
  }
  @media ${responsive.large} {
    font-size: ${root.normalFontSize};
  }
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
  }
`
export const LabelContent = styled.label`
  font-size: ${root.smallerFontSize};
	font-weight: ${root.fontSemiBold};
	position:relative;
	top:-5.1rem;
	left:0.5rem;
	color: ${root.textColorBlock};
	background-color: transparent;
	transition: 1s;
	${TextareaContent}:focus ~ & {
    color: ${root.titleColor};
	}
  @media ${responsive.large} {
    font-size: ${root.normalFontSize};
    top: -5.9rem;

  }
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
    top: -6.6rem;
  }
`
export const EditButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
`
export const SaveButton = styled.a`
  display: flex;
  justify-content: center;
  width: 4rem;
  align-items: center;
  font-size: ${ root.smallerFontSize};
  transition: 0.5s;
  cursor: ${props=> props.buttonAllow? "pointer": "not-allowed"};
  padding: 0.5rem;
  border: none;
  background-color: ${root.saveButtonColor};
  box-shadow: ${props=> props.buttonAllow ? "0px 0px 4px 2px #33C807 ": "none"};
  color: ${props=> props.buttonAllow ? root.containerColor: root.textColorBlock};
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