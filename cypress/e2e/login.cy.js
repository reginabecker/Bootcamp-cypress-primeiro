/// <reference types="Cypress" />

describe('Login', () => {

    it('Login com sucesso', () => {
        cy.visit('/login')
        cy.get('#user').type('thinaregina@gmail.com')
        //cy.get('#user').type('thinaregina@gmail.com{enter}')
        cy.get('#password').type('$thina$2023')
        cy.get('#btnLogin').click()
        cy.url().should('include', 'my-account')
    })
});




