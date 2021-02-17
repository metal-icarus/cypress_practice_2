/// <reference types="Cypress" />

describe ('Test suite PJ', function()
{
    it('Demo test', function()
    {

        cy.visit(Cypress.env("papajohnsUrl"))

        /* accept cookies */
        cy.get('.styles_accept__1dHCd').click()

        /* go to 'entrantes' */
        cy.get('#sectionmenu-side').click({force:true})
        //cy.get('#ga-container-menu-nav-sections-container > .row > #sectionmenu-side').click()
        cy.get('#add-product-433-especial_de_john > span').click()

        /* add address */
        cy.get('input[value=""]').type('Barcelona')
        cy.contains('Barcelona-Sants').click()
        //cy.get('full-width styles_results__2sN5L styles_active__1mwea ')
        cy.contains('Retiro').click()
        cy.contains('Colegio').click()
        cy.contains('Confirmar').click()
        cy.wait(4500)
        /* add 1 more */
        cy.get('.ga-btn-cart-increase-product-quantity > .fa').click()

        /* beberage */
        cy.get('button[id="sectionmenu-drink"]').first().click()
        cy.get('#add-product-130-nestea_limón > span').click()

        /* custom pizza */
        cy.get('.styles_content-links__1jZ2B > .row > #sectionmenu-pizza').click()
        cy.get('.styles_section-header__5Ij3k > :nth-child(2)').click()
        cy.contains('button', 'Grande').click()
        cy.contains('button', 'Fina').click()
        cy.get('.col > #add-product-make_your_pizza').click()
        
        cy.contains('button', 'Salsa Barbacoa').click()
        cy.contains('button', 'Bacon').click()
        //cy.contains('.text-dusty-gray','Tomate').invoke('removeAttr', 'position').click()
        cy.contains('button', 'Tomate').click()
        cy.get('.col > #add-product-make_your_pizza').click()
        cy.get('li[data-text="Caprichosa"]').click({force:true})
        //cy.get('select').select('Caprichosa').click()
        //cy.get('.row').find('li').contains('Crea tu pizza').click()
        cy.wait(4000)
        cy.get('.col > #add-product-make_your_pizza').click()

        /* payment */
        cy.get('.icon-cart').first().click()
        cy.get('#checkout-payment-method_ingenico').click()
        cy.get('[data-tip="1"]').click()
        cy.get('#ga-btn-checkout-confirm-order').click()
        
 


        




    })
})