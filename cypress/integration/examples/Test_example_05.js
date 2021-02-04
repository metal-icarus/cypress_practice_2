/// <reference types="Cypress" />

describe ('Test suite 05', function()
{
    it('Fifth test', function()
    {
        //using custom variables from cypress.json
        cy.visit(Cypress.env("practiceUrl"))
        
        cy.get('tr td:nth-child(2)').each(($el, index, list)=>{

            const text = $el.text()
            if (text.includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                    const priceTxt = price.text()
                    expect(priceTxt).to.equal('25')
                })
            }

        })


    })
})