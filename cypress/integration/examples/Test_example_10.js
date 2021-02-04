/// <reference types="Cypress" />
/// <reference types="Cypress-iframe" />
import 'cypress-iframe'
import HomePage from './../pageObjects/HomePage'
import ProductPage from './../pageObjects/ProductPage'


describe ('Test suite 10', function()
{
    before(function(){

        cy.fixture('my_example').then(function(data){
            this.fromData = data
        })

    })

    it('Tenth test', function()
    {

        const homePage = new HomePage()
        const productPage = new ProductPage()

        //using custom variables from cypress.json
        cy.visit(Cypress.env("angularUrl"))
        
        //cy.get(':nth-child(1) > .form-control').type('Rando')
        //cy.get('select').select('Male')

        homePage.getEditBox().type(this.fromData.name)
        homePage.getGender().select(this.fromData.gender)

        homePage.getTwoWayDataBinding().should('have.value', this.fromData.name)
        homePage.getEditBox().should('have.attr', 'minlength', 2)
        homePage.getEntrepreneaur().should('be.disabled')

        homePage.getShopTab().click()

        this.fromData.productName.forEach(function (element){
            cy.selectProduct(element)
        })
        
        productPage.getCheckoutButton().click()

        var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($element, index, $list) =>{

            const amount = $element.text()
            var number = amount.split(" ")
            number = number[1].trim()
            sum = Number(sum) + Number(number)
        }).then(function(){
            cy.log(sum)
        })

        cy.get('h3 strong').then(function($element){
            
            const amount = $element.text()
            var number = amount.split(" ")
            var total = number[1].trim()
            expect(Number(total)).to.equal(sum)
        })

        cy.contains('Checkout').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('#checkbox2').click({force:true})
        cy.get('input[type="submit"]').click()

        cy.get('.alert').then(function(element)
        {
            const text = element.text()
            expect(text.includes('Success'))
        })

    })
})