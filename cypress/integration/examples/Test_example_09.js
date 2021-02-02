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
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        
        //cy.get(':nth-child(1) > .form-control').type('Rando')
        //cy.get('select').select('Male')

        cy.get(':nth-child(1) > .form-control').type(this.fromData.name)
        cy.get('select').select(this.fromData.gender)

    })
})