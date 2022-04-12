describe('My First Test', () => {
    it('Visits the Kitchen Sink', () => {
        cy.visit('localhost:3000')
        cy.contains('Contained').click()
        cy.url().should('include', ':3000')
    })
})