// @flow

import React from 'react'
import LazyLoad from 'react-lazy-load'
import ProductFooter from '../product-footer'
import {
	Wrapper,
	TitleLink,
	ImgWrap,
	NoImgWrap,
	Description,
	Tag,
	Members,
	Image,
} from './Wrapper'
import type { Product } from '../../types'

type Props = {
	product: Product,
}

type State = {
	url: string,
	loadFailed: boolean,
}

export default class ProductBox extends React.Component<Props, State> {
	constructor(props: Props, context: any) {
		super(props, context)
		this.state = {
			url: '/images/product/sc_' + props.product.sid + '.png',
			loadFailed: false,
		}
	}

	render() {
		const { product } = this.props

		const base_title = <h2>{product.title}</h2>
		const title = product.is_alive ? (
			<TitleLink href={product.link} target="_blank">
				{base_title}
			</TitleLink>
		) : (
			base_title
		)
		const members = product.members.map(x => {
			const link = '//twitter.com/' + x.name
			return (
				<li key={product.sid + ':' + x.name}>
					<a href={link}>@{x.name}</a>: {x.description}
				</li>
			)
		})
		const ImageWrap = this.state.loadFailed ? NoImgWrap : ImgWrap
		const onError = () => {
			this.setState({
				url: '/images/404.png',
				loadFailed: true,
			})
		}
		return (
			<Wrapper>
				<ImageWrap>
					<LazyLoad height={219}>
						<Image src={this.state.url} onError={onError} />
					</LazyLoad>
				</ImageWrap>
				{title}
				<p>{product.subtitle}</p>
				<Description>{product.description}</Description>
				<Members>{members}</Members>
				<div>
					{product.tags.map(x => <Tag key={product.sid + ':' + x}>{x}</Tag>)}
				</div>
				<ProductFooter
					key={product.sid}
					is_alive={product.is_alive}
					link={product.link}
					github={product.github}
					trello={product.trello}
				/>
			</Wrapper>
		)
	}
}
