import React from 'react'
const Type = React.PropTypes

export default class ArtWork extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			img_url: `/images/art/${props.type}_${props.sid}.${props.ext}`,
			no_img: false
		}
	}

	static getTypes() {
		return {
			sid: Type.string.isRequired,
			level: Type.number.isRequired,
			ext: Type.string.isRequired,
			link: Type.string,
			type: Type.oneOf(['icon', 'logo', 'asset']).isRequired
		}
	}

	render() {
		const style = require('./art-work.css')
		const on_error = () => {
			this.setState({
				img_url: '/images/404.png',
				no_img: true
			})
		}

		const work_style = style[this.props.type]
		return (
			<li className={work_style}>
				<h3>{this.props.label}</h3>
				<div className={style.mat}>
					<img
						className={style.img}
						src={this.state.img_url}
						onError={on_error}/>
				</div>
			</li>
		)
	}
}
