describe('Add product to basket', () => {
    it('and check correct product is added', function () {
        cy.visit('/index.php?id_product=1&controller=product')
        cy.get('#add_to_cart').click()
        cy.get('.button-medium').contains('Proceed to checkout').click()
        cy.get('.cart_ref').contains('SKU : demo_1')
        cy.get('.product-name').contains('Faded Short Sleeve T-shirts')
    })
})