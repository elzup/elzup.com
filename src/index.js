import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

import { GlobalStyle } from './initialize'

import TopPage from './pages/top'
import ProductPage from './pages/product/index'
import ArtPage from './pages/art/index'
import LogPage from './pages/log/index'
import NotFoundPage from './pages/404/index'

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<GlobalStyle />
			<Switch>
				<Route exact path="/" component={TopPage} />
				<Route path="/product" component={ProductPage} />
				<Route path="/art" component={ArtPage} />
				<Route path="/log" component={LogPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
serviceWorkerRegistration.register()

reportWebVitals()
