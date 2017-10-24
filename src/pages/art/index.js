// @flow

import React from 'react'
import { getArts } from '../../api'

import HeadMenu from '../../components/head-menu'
import ArtWork from '../../components/art-work'
import { Subtitle, WorkBox } from './Wrapper'

type State = {
	icons: Array<any>,
	logos: Array<any>,
	assets: Array<any>,
}

export default class ArtPage extends React.Component<{}, State> {
	state: State = {
		icons: [],
		logos: [],
		assets: [],
	}

	componentDidMount() {
		this.loadArt()
	}

	async loadArt() {
		const data = await getArts
		this.setState({ ...data })
	}

	render() {
		const icons = this.state.icons.map(x => (
			<ArtWork key={x.sid} category="icon" {...x} />
		))
		const logos = this.state.logos.map(x => (
			<ArtWork key={x.sid} category="logo" {...x} />
		))
		const assets = this.state.assets.map(x => (
			<ArtWork key={x.sid} category="asset" {...x} />
		))
		return (
			<main>
				<header>
					<HeadMenu current="Art" />
					<h1>Art</h1>
					<p>えるざっぷの芸術作品</p>
				</header>
				<Subtitle>AppIcon</Subtitle>
				<WorkBox>{icons}</WorkBox>
				<Subtitle>Logo</Subtitle>
				<WorkBox>{logos}</WorkBox>
				<Subtitle>Parts Asset</Subtitle>
				<WorkBox>{assets}</WorkBox>
			</main>
		)
	}
}
