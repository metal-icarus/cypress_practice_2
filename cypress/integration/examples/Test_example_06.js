/// <reference types="Cypress" />

describe ('Test suite 06', function()
{
    it('Sixth test', function()
    {
        //using custom variables from cypress.json
        cy.visit(Cypress.env("practiceUrl"))
        
        //cy.get('#mousehover').invoke('show') 
        //cannot use invoke from grandparent to grandchild
        cy.get('.mouse-hover-content').invoke('show') //jquery invoke
        cy.contains('Top').click()
        //cy.contains('Top').click({force:true})
        //click even the item is invisible
        cy.url().should('include','top')


    })
})