import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ReactDOM from 'react-dom'

import TopPage from './pages/top'
import ProductPage from './pages/product/index'
import ArtPage from './pages/art/index'
import LogPage from './pages/log/index'
import NotFoundPage from './pages/404/index'

import './pages/index.css'

// Render the main component into the dom
ReactDOM.render(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={TopPage} />
			<Route path="/product" component={ProductPage} />
			<Route path="/art" component={ArtPage} />
			<Route path="/log" component={LogPage} />
			<Route component={NotFoundPage} />
		</Switch>
	</BrowserRouter>,
	document.getElementById('root')
)
