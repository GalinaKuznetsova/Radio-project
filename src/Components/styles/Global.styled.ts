import { createGlobalStyle } from "styled-components"
import { theme } from "./Theme"
import { font } from "./Common"

export const GlobalStyled = createGlobalStyle`
@font-face {
	font-family: 'Muller';
	src: local("MullerRegular"),
   url("../fonts/MullerRegular.woff2") format('woff2'),
   url("../fonts/MullerRegular.woff") format('woff');
	font-weight: 400;
	font-style: normal;
  font-display: swap;
}

@font-face {
	font-family: 'Muller';
	src: local("Muller-RegularItalic"),
   url("../../assets/fonts/MullerRegularItalic.woff2") format('woff2'),
   url("../../assets/fonts/MullerRegularItalic.woff") format('woff');
	font-weight: 400;
	font-style: normal;
  font-display: swap;
}

@font-face {
	font-family: 'Muller';
	src: local("Muller-LightItalic"),
   url("../../assets/fonts/MullerLightItalic.woff2") format('woff2'),
   url("../../assets/fonts/MullerLightItalic.woff") format('woff');
	font-weight: 300;
	font-style: normal;
  font-display: swap;
}

@font-face {
	font-family: 'Muller';
	src: local("MullerMedium"),
   url("../../assets/fonts/MullerMedium.woff2") format('woff2'),
   url("../../assets/fonts/MullerMedium.woff") format('woff');
	font-weight: 500;
	font-style: normal;
  font-display: swap;
}

@font-face {
	font-family: 'Muller';
	src: local("MullerBold"),
   url("../../assets/fonts/MullerBold.woff2") format('woff2'),
   url("../../assets/fonts/MullerBold.woff") format('woff');
	font-weight: 600;
	font-style: normal;
  font-display: swap;
}
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}
body {
    font-family: 'Muller','Open Sans', 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}

a {
    text-decoration: none;
}

li {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}

section {
    padding: 94px 0;

    @media ${theme.media.tabletmin} {
      padding: 90px 0;
    }

    @media ${theme.media.mobile} {
      padding: 40px 0;
    }
}
section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
}

section:nth-of-type(2) {
    background: #E6E8EC;
}

section:nth-of-type(4),
section:nth-of-type(7) {
    background-color: ${theme.colors.secondaryBg};
    color: ${theme.colors.fontDescription};
}

section:nth-of-type(6) {
    background: #292E39;
    color: #FFF;
}

h1{
  ${font({family:" 'Muller', sans-serif",weight:700,Fmax:60,Fmin:32})};
  align-items: center;
  span {
    font-weight: 400;
    font-style: italic;
  }
}

h3 {
   font-size: 20px;
   font-weight: 400;

@media ${theme.media.mobile}{
  font-size: 12px;
 }
 }

p {
  ${font({family:" 'Muller', sans-serif",weight:400,Fmax:16,Fmin:14})};
  color: ${theme.colors.font};
 
}


`

