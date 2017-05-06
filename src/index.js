import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import ReactDOM from 'react-dom'

import "babel-polyfill";

import TopPage from './pages/top/index.jsx'
import ProductPage from './pages/product/index.jsx'
import ArtPage from './pages/art/index.jsx'
import LogPage from './pages/log/index.jsx'
import NotFoundPage from './pages/404/index.jsx'

import './pages/index.css'

// Render the main component into the dom
ReactDOM.render((
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={TopPage}/>
				<Route path="/product" component={ProductPage}/>
				<Route path="/art" component={ArtPage}/>
				<Route path="/log" component={LogPage}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>
	</BrowserRouter>
), document.getElementById('container'))
