import React from 'react';
import GlobalStyle from './style/globalStyle';

import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import FormularioAdd from './components/FormAdd';

function App() {
	return (
		<React.Fragment>
			<GlobalStyle />
			<FormularioAdd />
			<Header />
			<Content />
			<Footer />
		</React.Fragment>		
	)
}

export default App;
