/// <reference types="Cypress" />

describe ('Test suite 07', function()
{
    it('Seventh test', function()
    {
        cy.visit('http://qaclickacademy.com/practice.php')
        
        //alternative to navigate to a new page insead of using .invoke('removeAttr', url)
        cy.get('#opentab').then(function (element) {
            
            const url = element.prop('href')
            cy.visit(url)
        });


    })
})