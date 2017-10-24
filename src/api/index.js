// @flow

import _ from 'lodash'
import axios from 'axios'

type GetProductsResponse = { products: any[], tags: any[], categories: any[] }

export async function getProducts(): Promise<GetProductsResponse> {
	const uri =
		'https://script.googleusercontent.com/macros/echo?user_content_key=njSw0NlUahn9VG4J0Ydx6VOu0OjFJ9120zF2_-dQw2I4j4EP-OYtISj32OLOd-BRs9WD2mVgoxZ2_du9Cj1lMVHIPtP0zinTm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnCoBYuj4hganT42SDz8Jy-RSH6uFnN0GLeKFvmmAZURgsD8cl5mcfExCBSyeqOrwFiPIEyVC5G-3&lib=M4AumUuRYH4oWs3BKvnnNtH2y4DtNeKF1'
	const res = await axios.get(uri, { 'Access-Control-Allow-Origin': '*' })
	const categories = []
	const tags = []
	const products = res.data.map(product => {
		const ptags = product.tags.split('-')
		const link = product.link || null
		const github = product.github || null
		const trello = product.trello || null
		let members = []
		if (product.members) {
			members = product.members.split('-').map(member => {
				const [name, description] = member.split(':')
				return { name, description }
			})
		}
		tags.push(...ptags)
		categories.push(product.category)
		return { ...product, tags: ptags, members, link, github, trello }
	})
	categories.unshift('ALL')
	return { products, categories: _.uniq(categories), tags: _.uniq(tags) }
}
