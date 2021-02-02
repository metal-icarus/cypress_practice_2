/// <reference types="Cypress" />

describe ('Test suite 02', function()
{
    it('Second test', function()
    {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')

        cy.wait(2000)

        cy.get('.products').as('prodLocator')
       
        cy.get('@prodLocator').find('.product').each(($el, index, $list) => {
            const textC = $el.find('h4.product-name').text()
            if (textC.includes('Cashews')){
                $el.find('button').trigger('click')
            }
        })

        /*
        //Commented block since when attemps to click on 'proceed' button, it gets an weird error about compiling
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        */
        cy.wait(2000)
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/cart')
        cy.contains('Place Order').click()
        


    })
})