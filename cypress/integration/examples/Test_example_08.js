/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe ('Test suite 08', function()
{
    it('Eighth test', function()
    {
        cy.visit('http://qaclickacademy.com/practice.php')
        
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click()
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)

    })
})