describe('Form inputs', () => {
    it('can navigate to the site', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', 'localhost')
    })

    it('click order', () => {
        cy.get('button').click()

    })
    

    it('can type a name', () => {
      cy.get('input[name="name"]')
        .type('Buddy')
        .should('have.value', 'Buddy')
    })

    it('click size of pizza', () => {
        cy.get('select[name="size"]').select('Large')

    })
 
    it('can select sauce', () => {
        cy.get('input[value="Original Red"]')
        .click()

    })

    it('can select multiple toppings', () => {
        cy.get('input[name="Pepperoni"]').click()

        cy.get('input[name="Onions"]')
        .click()
        cy.get('input[name="Sausage"]')
        .click()

    })

    

        it('can submit form', () => {
            cy.get('button').click()

        })
    })