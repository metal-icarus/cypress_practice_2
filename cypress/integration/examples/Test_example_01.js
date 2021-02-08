/// <reference types="Cypress" />

describe ('Test suite 01', function()
{
    it('First test', function()
    {
        //cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //since it have baseURL in cypress.json
        cy.visit('')

        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').find('.product').should('have.length', 4)

        
        cy.get('.products').as('prodLocator')

        cy.get('@prodLocator').find('.product').each(($el, index, $list) => {
            
            const textC = $el.find('h4.product-name').text()

            if (textC.includes('Cashews')){

                $el.find('button').trigger('click')

            }


        })


    })
})