describe('My First Test', () => {
	// it('successfully loads', () => {
	// 	cy.visit('/')
	// })
	it('Does not do much!', () => {
		cy.visit('https://elzup.com')
		cy.contains('Product').click()
		cy.contains('sns').click()
		cy.contains('Art').click()

		cy.get('h1').should('contain', 'Art')
	})
})
