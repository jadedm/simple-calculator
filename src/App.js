import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css'

import Screen from './components/Screen';
import Buttons from './components/Buttons';
import Header from './components/Header';
import reducer from './reducers'

const App = () => {
	return (
		<div className ="calc-app">
			<div className="calc-wrapper">
				<Header />
				<Screen />
				<Buttons />
			</div>
		</div>
	);
};

const store = createStore(reducer);

const wrapped = (
	<Provider store={store}>
		<App />
	</Provider>
);

export default wrapped;