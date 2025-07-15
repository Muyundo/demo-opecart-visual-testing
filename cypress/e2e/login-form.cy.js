/// <reference types="cypress" />
beforeEach(() => {
    cy.BaseUrl()
})
describe('Login Page Visual Testing', () => {
    it('Check elements visibility', () => {
        cy.get('input[name="username"]', {timeout: 10000}).should('be.visible')
        cy.get('input[name="password"]', {timeout: 10000}).should('be.visible')
        cy.get('button[type="submit"]', {timeout: 10000}).should('be.visible')
        cy.get('.orangehrm-login-branding', {timeout: 10000}).should('be.visible')
        cy.get('.orangehrm-login-footer', {timeout: 10000}).should('be.visible')
    
})
})