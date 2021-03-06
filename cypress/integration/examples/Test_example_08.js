/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe ('Test suite 08', function()
{
    it('Eighth test', function()
    {
        //using custom variables from cypress.json
        cy.visit(Cypress.env("practiceUrl"))
        
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

    })
})