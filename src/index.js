import App from './components/App';
import Home from './components/Home';
import Specific from './components/Specific';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import createStore from './store';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: 'Roboto', sans-serif;
	}
`;

const routes = (
	<Provider store={createStore()}>
		<Router>
			<GlobalStyle />
			<App>
				<Switch>
					<Route
						component={Home}
						exact
						path={'/'}
					/>
					<Route
						component={Specific}
						exact
						path={'/specific'}
					/>
				</Switch>
			</App>
		</Router>
	</Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
