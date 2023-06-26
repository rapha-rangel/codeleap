import {createGlobalStyle, keyframes} from "styled-components";

export const root ={
  headerHeigth: "3rem",
	/*----------------------Colors----------------------------------*/
	loginButtonColor: "#07EDF8",
	saveButtonColor: "#06FE0A",
	deleteButtonColor: "#FF3E20",
	headerColor: "#8F00FF",
	titleColor: "#242329",
	backgroundColor: "#6d6a7c",
	textColorBlock: "#A2A2A2 ",
	containerColor: "#fff",
	/*----------------------Fonts----------------------------------*/
	bigFontSize: "2rem",
	h1FontSize: "1.5rem",
	h2FontSize: "1.25rem",
	h3FontSize: "1.125rem",
	normalFontSize: ".9387rem",
	smallFontSize: ".813rem",
	smallerFontSize: ".75rem",
	fontMedium: "500",
	fontSemiBold: "600",
	fontBold: "700",
	/*----------------------Margens----------------------------------*/
	mb025: ".25rem",
	mb05: ".5rem",
	mb075: ".75rem",
	mb1: "1rem",
	mb15:"1.5rem",
	mb2: "2rem",
	mb25: "2.5rem",
	mb3: "3rem",
	/*----------------------------------------Z-Index------------------------------------------*/
	zModal: "1000",
}

/*-------------------------Responsive----------------------------------*/
export const responsive ={
	small: "(min-width: 320px)",
	medium: "(min-width: 568px)",
	large: "(min-width: 768px)",
	exLarge: "(min-width: 1060px)"
}

export const GlobalStyle = createGlobalStyle`
	*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
	::-webkit-scrollbar{
		display: none;
	}
	}
	html{
		scroll-behavior: smooth;
	}
	body{
		background-color: ${root.backgroundColor};
	}
	ul {
		list-style: none;
	}
	li{
	}
	i{
		font-style: normal;
	}
`

export const openModalAnimation = keyframes`
0%{
	opacity: 0;
}
 100%{
	opacity: 1;
 }
`

export const buttonFeedAnimation = keyframes`
0%{
	opacity: 1;
	bottom: 0;
}
 100%{
	opacity: 0;
	bottom:-100px;
 }
`

export const showFeed= keyframes`
0%{
	bottom: -300px;
	opacity: 0;
}
 100%{
	bottom: 0;
	opacity: 1;
 }
`
