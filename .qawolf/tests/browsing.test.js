const { launch } = require('qawolf')
const selectors = require('../selectors/browsing')

describe('browsing', () => {
	let browser

	beforeAll(async () => {
		browser = await launch({ url: 'http://localhost:3000/' })
	})

	afterAll(() => browser.close())

	it('can click "Product" link', async () => {
		await browser.click(selectors[0])
	})

	it('can scroll', async () => {
		await browser.scroll(selectors[1], { x: 0, y: 0 })
	})

	it('can click "★★" button', async () => {
		await browser.click(selectors[2])
	})

	it('can click "★" button', async () => {
		await browser.click(selectors[3])
	})

	it('can click "bot" button', async () => {
		await browser.click(selectors[4])
	})

	it('can click "neta" button', async () => {
		await browser.click(selectors[5])
	})

	it('can scroll', async () => {
		await browser.scroll(selectors[6], { x: 0, y: 0 })
	})

	it('can click "Art" link', async () => {
		await browser.click(selectors[7])
	})

	it('can scroll', async () => {
		await browser.scroll(selectors[8], { x: 0, y: 0 })
	})

	it('can click "Top" link', async () => {
		await browser.click(selectors[10])
	})

	it('can click "Art" link', async () => {
		await browser.click(selectors[11])
	})

	it('can click "Top" link', async () => {
		await browser.click(selectors[12])
	})

	it('can click canvas', async () => {
		await browser.click(selectors[13])
	})

	it('can click canvas', async () => {
		await browser.click(selectors[14])
	})

	it('can click canvas', async () => {
		await browser.click(selectors[15])
	})

	it('can click canvas', async () => {
		await browser.click(selectors[16])
	})
})
