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

        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')
        
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

    })
})