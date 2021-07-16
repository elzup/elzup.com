// @flow

import { uniq } from '../utils'

type GetProductsResponse = { products: any[], tags: any[], categories: any[] }

export async function getProducts(): Promise<GetProductsResponse> {
	const res = await fetch('/data/products.json')
	const categories = []
	const tags = []
	const products = (await res.json()).map((product) => {
		const ptags = product.tags.split('-')
		const link = product.link || null
		const github = product.github || null
		const trello = product.trello || null
		let members = []
		if (product.members) {
			members = product.members.split('-').map((member) => {
				const [name, description] = member.split(':')
				return { name, description }
			})
		}
		tags.push(...ptags)
		categories.push(product.category)
		return { ...product, tags: ptags, members, link, github, trello }
	})
	categories.unshift('ALL')
	return { products, categories: uniq(categories), tags: uniq(tags) }
}

export async function getArts(): Promise<any> {
	const data = await fetch('/data/arts.json')
	return await data.json()
}

type GetAAResponse = { aa1: string, aa2: string }

export async function getAA(): Promise<GetAAResponse> {
	const aa1 = await (await fetch('/data/welcome_aa.txt')).text()
	const aa2 = await (await fetch('/data/elzup_aa.txt')).text()
	return { aa1, aa2 }
}
