import styled, {css} from 'styled-components';
import { responsive, root, openModalAnimation } from '../../Styled/styled';

export const Section =styled.section`
${props=>{
  switch(props.actionName){
    case "Create":
      return`
      `
      case "Delete":
      case "Save":
        return`
        position: fixed;
        z-index: ${root.zModal};
        top: 30%;
        width: 100vw;
        `
      default:
  }
}}
  
`
export const Container = styled.div`
${props=>{
  switch(props.actionName){
    case "Create":
      return css`
        border: solid 1px black;
        margin-left: 1rem;
        margin-right: 1rem;
        background-color: ${root.containerColor};
        padding: 1rem;
        border-radius: 10px ;
        margin-bottom: ${root.mb1};
      `
      case "Delete" :
      case "Save":
        return css`
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
        default:
  }}}
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
export const ContentDiv = styled.div`
   ${props=>{
    switch(props.actionName){
      case "Save":
      case "Create":
      return`
        display: grid
        `
      case "Delete":
      return`
        display: none
      `
        default:
      
    }
  }}
`
export const InputTitle = styled.input`
  font-size: ${root.smallerFontSize};
  margin-bottom: ${root.mb1};
  display:  block;
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
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
  gap: 1rem;
`
export const ActionButton = styled.button`
  display: flex;
  justify-content: center;
  width: 4rem;
  align-items: center;
  font-size: ${ root.smallerFontSize};
  transition: 0.5s;
  cursor: ${props=> props.disabled ?  "not-allowed":"pointer"};
  padding: 0.5rem;
  border: none;
  ${props=>{
    switch(props.actionName){
      case "Save":
      return`
        background-color: ${root.saveButtonColor};
        box-shadow: ${props.disabled ?  "none": "0px 0px 4px 2px #33C807" };
        color: ${props.disabled ? root.textColorBlock : root.containerColor };
        `
      case "Create":
        return`
        box-shadow: ${props.disabled  ?  "none" : "0px 0px 4px 2px #05ABBC "};
        background-color: ${root.loginButtonColor};
        color: ${props.disabled ?  root.textColorBlock : root.containerColor} ;
        `
      case "Delete":
      return`
        background-color: ${root.deleteButtonColor};
        color: ${root.containerColor};
      `
        default:
      
    }
  }}
  border-radius: 5px;
  @media ${responsive.large} {
    font-size: ${root.normalFontSize};
  }
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
    width:5rem;
  }
`
export const CancelButton = styled.button`
  display: ${props => props.actionName === "Create" ? "none" : "flex"};
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