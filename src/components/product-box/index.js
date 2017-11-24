// @flow

import React from 'react'
import ProductFooter from '../product-footer'
import ImageBox from './ImageBox'
import { Wrapper, TitleLink, Description, Tag, Members } from './Wrapper'
import type { Product } from '../../types'

type Props = {
	product: Product,
}

const ProductBox = (props: Props) => {
	const { product } = props

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
	return (
		<Wrapper>
			<ImageBox url={'/images/product/sc_' + product.sid + '.png'} />
			{title}
			<p>{product.subtitle}</p>
			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<Description>{product.description}</Description>
				<Members>{members}</Members>
				<div>
					{product.tags.map(x => <Tag key={product.sid + ':' + x}>{x}</Tag>)}
				</div>
				<ProductFooter
					key={product.sid}
					isAlive={product.is_alive}
					link={product.link}
					github={product.github}
					trello={product.trello}
				/>
			</div>
		</Wrapper>
	)
}

export default ProductBox
