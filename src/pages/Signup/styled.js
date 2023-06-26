import styled from 'styled-components';
import {responsive, root} from '../../styled';

export const Section = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
`
export const Container = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: ${root.containerColor};
  padding: 1rem;
  border-radius: 10px ;
  margin: auto ;
  @media ${responsive.medium} { 
    max-width: 500px;
  }
` 
export const Content = styled.div`
  align-items: center;
  display: grid;
`
export const Title = styled.h3`
  color: ${root.titleColor}; 
  font-size: ${root.h3FontSize};
  font-weight: ${root.fontMedium};
  margin-bottom: ${root.mb2};
  @media ${responsive.exLarge} {
    font-size: ${root.h1FontSize};
    font-weight: ${root.fontSemiBold};
    margin-bottom:${root.mb3};
  }
`
export const Input = styled.input`
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
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
  }
`
export const Label = styled.label`
  font-size: ${root.smallFontSize} ;
	font-weight: ${root.fontMedium};
	position:relative;
	top:${props=> props.textInput ? "-4rem": "-2.4rem"};
	left:0.5rem;
	color: ${props=> props.textInput ? root.titleColor: root.textColorBlock};
	background-color: transparent;
	transition: 1s;
	${Input}:focus ~ & {
		top:-4rem;
		position: relative;
    color: ${root.titleColor};
	}
  @media ${responsive.exLarge} {
    font-size: ${root.h2FontSize};
    top:${props=> props.textInput ? "-5rem": "-3rem"};
    ${Input}:focus ~ & {
		top:-5rem;
	}
  }
`
export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
export const Button = styled.a`
  font-size: ${root.smallFontSize};
  transition: 0.5s;
  cursor: ${props=> props.textInput? "pointer": "not-allowed"};
  padding: 0.5rem;
  border: none;
  background-color: ${root.loginButtonColor};
  color: ${props=> props.textInput? root.containerColor: root.textColorBlock};
  border-radius: 5px;
  @media ${responsive.exLarge}{
    font-size: ${root.h2FontSize};
  }
`