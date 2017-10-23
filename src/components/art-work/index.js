// @flow

import React from 'react'
import LazyLoad from 'react-lazy-load'

type Props = {
	sid: string,
	level: number,
	ext: string,
	link?: string,
	type: 'icon' | 'logo' | 'asset',
}

type State = {
	img_url: string,
	no_img: boolean,
}

export default class ArtWork extends React.Component {
	props: Props
	state: State = {
		img_url: `/images/art/${this.props.type}_${this.props.sid}.${this.props
			.ext}`,
		no_img: false,
	}

	render() {
		const style = require('./art-work.css')
		const on_error = () => {
			this.setState({
				img_url: '/images/404.png',
				no_img: true,
			})
		}

		const work_style = style[this.props.type]
		return (
			<li className={work_style}>
				<h3>{this.props.label}</h3>
				<div className={style.mat}>
					<LazyLoad>
						<img
							className={style.img}
							src={this.state.img_url}
							onError={on_error}
						/>
					</LazyLoad>
				</div>
			</li>
		)
	}
}
