/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'

describe ('Test suite 09', function()
{
    before(function(){

        cy.fixture('my_example').then(function(data){
            this.fromData = data
        })

    })

    it('Ninth test', function()
    {
        //using custom variables from cypress.json
        cy.visit(Cypress.env("angularUrl"))
        
        //cy.get(':nth-child(1) > .form-control').type('Rando')
        //cy.get('select').select('Male')

        cy.get(':nth-child(1) > .form-control').type(this.fromData.name)
        cy.get('select').select(this.fromData.gender)

        cy.get(':nth-child(4) > .ng-untouched').should('have.value', this.fromData.name)
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', 2)
        cy.get('#inlineRadio3').should('be.disabled')

        cy.get(':nth-child(2) > .nav-link').click()

        this.fromData.productName.forEach(function (element){
            cy.selectProduct(element)
        })
        

    })
})