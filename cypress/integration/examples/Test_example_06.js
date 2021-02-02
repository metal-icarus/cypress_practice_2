/// <reference types="Cypress" />

describe ('Test suite 06', function()
{
    it('Sixth test', function()
    {
        cy.visit('http://qaclickacademy.com/practice.php')
        
        //cy.get('#mousehover').invoke('show') 
        //cannot use invoke from grandparent to grandchild
        cy.get('.mouse-hover-content').invoke('show') //jquery invoke
        cy.contains('Top').click()
        //cy.contains('Top').click({force:true})
        //click even the item is invisible
        cy.url().should('include','top')


    })
})