import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import ReactDOM from 'react-dom'

import TopPage from './pages/top/index.jsx'
import ProductPage from './pages/product/index.jsx'
import ArtPage from './pages/art/index.jsx'
import LogPage from './pages/log/index.jsx'
import NotFoundPage from './pages/404/index.jsx'

import './pages/index.css'

// Render the main component into the dom
ReactDOM.render((
	<Router history={browserHistory}>
		<Route path="/" component={TopPage}/>
		<Route path="product" component={ProductPage}/>
		<Route path="art" component={ArtPage}/>
		<Route path="log" component={LogPage}/>
		<Route path="*" component={NotFoundPage}/>
	</Router>
), document.getElementById('container'))
