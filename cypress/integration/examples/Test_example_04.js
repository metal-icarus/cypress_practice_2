/// <reference types="Cypress" />

describe ('Test suite 04', function()
{
    it('Fourth test', function()
    {
        cy.visit('http://qaclickacademy.com/practice.php')
        
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')  
        })

        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')  
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click() //jquery invoke
        cy.url().should('include', 'rahulshettyacademy')
        cy.go('back')




    })
})