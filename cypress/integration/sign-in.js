describe('Login form', () => {
    beforeEach(() => {
        cy.visit('/index.php?controller=authentication&back=my-account')
    })
    it('no email', function () {
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger')
            .should('be.visible')
            .contains('An email address required.')
    })
    it('invalid login details', function () {
        cy.typeRandEmail('#email')
        cy.get('#passwd').type('meh')
        cy.get('#SubmitLogin').click()
        cy.get('.alert-danger')
            .should('be.visible')
            .contains('Invalid password.')
    })
    it('valid login', function () {
        cy.typeRandEmail('#email_create')
        cy.get('#SubmitCreate').click()
        cy.get('#account-creation_form').should('be.visible')
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type('first')
        cy.get('#customer_lastname').type('last')
        cy.get('#firstname').type('first')
        cy.get('#lastname').type('last')
        cy.get('#address1').type('address1')
        cy.get('#city').type('city')
        cy.get('#state').type('state')
        cy.get('#postcode').type('postcode')
        cy.get('#phone_mobile').type('07987654321')
        cy.get('#submitAccount').click()

        cy.get('#my-account').should('be.visible')
    })
})