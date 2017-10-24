// @flow

import React from 'react'
import HeadMenu from '../../components/head-menu'
import styled from 'styled-components'

const Stop = styled.div`
	padding-left: 100px;
`

export default class LogPage extends React.Component<{}> {
	render() {
		return (
			<main>
				<header>
					<HeadMenu current="Log" />
					<h1>Log</h1>
					<p>えるざっぷのログ</p>
				</header>
				<Stop>Under Construction</Stop>
			</main>
		)
	}
}
