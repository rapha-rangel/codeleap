import styled from 'styled-components';
import { buttonFeedAnimation, responsive, root, showFeed } from '../../components/styled';

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
export const ContainerCreate = styled.div`
  border: solid 1px black;
  margin-left: 1rem;
  margin-right: 1rem;
  background-color: ${root.containerColor};
  padding: 1rem;
  border-radius: 10px ;
  margin-bottom: ${root.mb1};
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
export const CreateButtonDiv = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
export const CreateButton = styled.a`
  font-size: ${root.smallerFontSize};
  transition: 1s;
  cursor: ${props=> props.buttonAllow? "pointer": "not-allowed"};
  padding: 0.5rem;
  border: none;
  box-shadow: ${props=> props.buttonAllow ? "0px 0px 4px 2px #05ABBC ": "none"};
  background-color: ${root.loginButtonColor};
  color: ${props=> props.buttonAllow ? root.containerColor: root.textColorBlock};
  border-radius: 5px;
  @media ${responsive.large} {
    font-size: ${root.normalFontSize};
  }
  @media ${responsive.exLarge} {
    font-size: ${root.h3FontSize};
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


