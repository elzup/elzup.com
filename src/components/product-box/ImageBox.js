// @flow

import React from 'react'
import LazyLoad from 'react-lazy-load'

import { Image, ImgWrap } from './Wrapper'

type Props = {
	url: string,
}

type State = {
	url: string,
	loadFailed: boolean,
}

export default class ImageBox extends React.Component<Props, State> {
	constructor(props: Props, context: any) {
		super(props, context)
		this.state = {
			url: props.url,
			loadFailed: false,
		}
	}

	render() {
		return (
			<ImgWrap>
				<LazyLoad height={219}>
					<Image
						src={this.state.url}
						onError={() => {
							this.setState({
								url: '/images/404.png',
								loadFailed: true,
							})
						}}
					/>
				</LazyLoad>
			</ImgWrap>
		)
	}
}
