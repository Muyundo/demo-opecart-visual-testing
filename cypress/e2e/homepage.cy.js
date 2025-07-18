/// <reference types="cypress" />
beforeEach(() => {
    cy.BaseUrl()
})
describe('Home Page Visual Testing', () => {
   it('Log into the application', () => {
        cy.Login()
        cy.url().should('include', '/dashboard')
        cy.get('.oxd-topbar-header').should('be.visible')
        cy.get('.oxd-layout-context', {timeout: 10000}).should('have.length.at.least', 1)
        cy.get('.oxd-layout-context').first().parent().matchImageSnapshot('dashboard-main-widgets')

    })

    it('Should display correctly on Iphone 6', () => {
        cy.viewport('iphone-6')
        cy.Login()
        cy.get('.oxd-topbar-header').should('be.visible')
        cy.get('.oxd-layout-context', {timeout: 10000}).should('have.length.at.least', 1)
        cy.get('.oxd-layout-context').first().parent().matchImageSnapshot('dashboard-main-widgets-iphone6')
    })
})