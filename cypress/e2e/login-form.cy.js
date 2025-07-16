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
    it('Confirm that login page is the same visually', () => {
        cy.get('.oxd-text--h5', {timeout: 10000}).contains('Login').should('be.visible')//wait for load
        cy.get('body').matchImageSnapshot('Login-Page', {
        failureThreshold: 0.02,
        failureThresholdType: 'percent'
        }) 

    })

    it('Should have correct logo image and should be visible', () => {
        cy.get('.orangehrm-login-logo > img').should('be.visible')
         .and($img => {
            expect($img[0].naturalWidth).to.be.greaterThan(0)
            expect($img[0].naturalHeight).to.be.greaterThan(0)
        })
        .and('have.attr', 'src')
        .and('include', 'ohrm_logo.png')
})
    it('should have consistent logo appearance', () => {
        cy.get('.orangehrm-login-logo > img').should('be.visible')
        cy.matchImageSnapshot('Login-Logo')
    })

})