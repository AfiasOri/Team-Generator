import React from 'react';

import 'semantic-ui-css/semantic.min.css';
import './globals.css';

import Header from './components/Header';
import Home from './pages/Home';

function App() {
	return (
		<>
			<Header />
			<Home />
		</>
	);
}

export default App;
