// @flow

import React from 'react'
import LazyLoad from 'react-lazy-load'

import styled from 'styled-components'
import { media } from '../../utils'

export const DummyContact = styled.li``
const Icon = styled.li`
	width: 300px;
	margin: 5px;
`

const IconMat = styled.div`
	width: 278px;
	height: 278px;
	padding: 10px;
	background-color: #000;
	background-image: linear-gradient(white 2px, transparent 2px),
		linear-gradient(90deg, white 2px, transparent 2px),
		linear-gradient(rgba(255, 255, 255, 0.3) 1px, transparent 1px),
		linear-gradient(90deg, rgba(255, 255, 255, 0.3) 1px, transparent 1px);
	background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
	background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
`

const Work = styled.img`
	width: 100%;
	margin: 0 auto;
	vertical-align: bottom;
`

const Asset = styled.li`
	width: 450px;
	margin: 5px;
`

const AssetMat = styled.div`
	background-color: white;
	background: linear-gradient(
			45deg,
			#ddd 25%,
			transparent 25%,
			transparent 75%,
			#ddd 75%,
			#ddd
		),
		linear-gradient(
			45deg,
			#ddd 25%,
			transparent 25%,
			transparent 75%,
			#ddd 75%,
			#ddd
		);
	background-size: 20px 20px;
	background-position: 0 0, 10px 10px;
`

type Props = {
	sid: string,
	label: number,
	ext: string,
	category: 'icon' | 'logo' | 'asset',
}

type State = {
	url: string,
	loadFailed: boolean,
}

export default class ArtWork extends React.Component<Props, State> {
	constructor(props: Props, context: any) {
		super(props, context)
		this.state = {
			url: `/images/art/${props.category}_${props.sid}.${props.ext}`,
			loadFailed: false,
		}
	}

	render() {
		const { sid, label, ext, category } = this.props
		const { url, loadFailed } = this.state
		const on_error = () => {
			this.setState({
				url: '/images/404.png',
				loadFailed: true,
			})
		}

		const Wrapper = category === 'icon' ? Icon : Asset
		const Mat = category === 'icon' ? IconMat : AssetMat
		return (
			<Wrapper>
				<h3>{label}</h3>
				<Mat>
					<LazyLoad>
						<Work src={url} onError={on_error} />
					</LazyLoad>
				</Mat>
			</Wrapper>
		)
	}
}
