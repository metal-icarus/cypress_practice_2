/// <reference types="Cypress" />

describe ('Test suite 03', function()
{
    it('Third test', function()
    {
        //using custom variables from cypress.json
        cy.visit(Cypress.env('automUrl'))
        
        
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')   
        cy.get('input[type="checkbox"]').check(['option1', 'option3'])
        cy.get('input[type="checkbox"]').uncheck()   
        
        cy.get('select').select('option1').should('have.value', 'option1')
    
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
           
            if ($el.text()==='India'){
                $el.trigger('click')
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('be.not.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        cy.get('[value="radio3"]').check().should('be.checked')

    })
})