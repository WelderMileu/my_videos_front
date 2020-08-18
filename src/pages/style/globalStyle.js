import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--color-black: #000000;
		--color-black-light: #3C4043;
		--color-brown: #2B190E;
		--color-purple-light: #A457BF;
		--color-gray-light: #B1B4C4;
		--color-gray-dark : #52565A;
		--color-blue: #2C5369;
		--color-blue-light: #99BAC6;
		--color-white: #f1f1f1; 
		--color-white-light: #fff;
		--color-red: #FF2F2F; 
	}

	*, 
	html,
	#root {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		font-family: 'calibri', sans-serif;
		font-size: 1.2rem;
		height: 100vh;
		width: 100%;
		position: relative;
	}

	button, 
	input,
	label {
		font-family: 'calibri', sans-serif;
		font-size: 1.2rem;
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
