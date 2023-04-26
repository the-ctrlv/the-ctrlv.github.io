import { createGlobalStyle } from 'styled-components';
import { breakpoints, colors } from './constants';
import { mqMax } from './functions';

export const GlobalStyle = createGlobalStyle`
	body {
  margin: 0;
  background-color: #E5E5E5;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter';
	font-weight: 600;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
	box-sizing: border-box;
  color: ${colors.black100};
	

  h1,
  h2,
  h3 {
    margin: 0;
		font-weight: 600;
  }
}
h1 {
	font-size: 56px;
	line-height: 65px;
}
h2 {
	font-size: 32px;
	line-height: 37px;
	@media ${mqMax(breakpoints.md)} {
		font-size: 18px;
		line-height: 20px;
	}
}

.btn {
	border: none;
	border-radius: 12px;
	background-color: ${colors.midBlue};
	color: ${colors.white};
	font-size: 20px;	
	padding: 21px 127px;
	cursor: pointer;
	font-weight: 600;
	&:hover {
		background-color: ${colors.lightBlue};
	}
	&:focus {
		outline: none;
		background-color: ${colors.darkBlue};
	}
	@media ${mqMax(breakpoints.md)} {
		max-width: none;
		width: 100%;
		padding: 16px 0;
	}
}

.content-container {
  display: flex;
  position: relative;
	height: 100vh;
}


code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;
