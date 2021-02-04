/// <reference types="Cypress" />

describe ('Test suite 07', function()
{
    it('Seventh test', function()
    {
        //using custom variables from cypress.json
        cy.visit(Cypress.env("practiceUrl"))
        
        //alternative to navigate to a new page insead of using .invoke('removeAttr', url)
        cy.get('#opentab').then(function (element) {
            
            const url = element.prop('href')
            cy.visit(url)
        });


    })
})