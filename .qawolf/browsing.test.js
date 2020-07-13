const qawolf = require('qawolf')

let browser
let page

beforeAll(async () => {
	browser = await qawolf.launch()
	const context = await browser.newContext()
	await qawolf.register(context)
	page = await context.newPage()
})

afterAll(async () => {
	await qawolf.stopVideos()
	await browser.close()
})

test('browsing', async () => {
	await page.goto('http://localhost:3000/')
	await page.click('text=Product')
	await page.click('text=Art')
	// await page.click("text=Make");
	await page.click('text=Top')
	// await page.click('[href="//github.com/elzup"]');
})
