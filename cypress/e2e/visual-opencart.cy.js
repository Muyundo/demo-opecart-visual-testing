describe('Visual Testing for OpenCart', () => {
    it('Check homepage visual appearance', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('input[name="username"]', {timeout: 10000}).should('be.visible')
                cy.matchImageSnapshot('Login-Page')


       
})
})