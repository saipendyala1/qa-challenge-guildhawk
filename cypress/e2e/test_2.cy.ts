describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('http://localhost:3000/') // enter the url i.e localhost:3000
        cy.title().should('eq', 'Language List')
    })
    it('click Login button ', () => {
        cy.visit('http://localhost:3000/') // enter the url i.e localhost:3000
        cy.contains('Log In').click() // click login button
        cy.get("[type='email']").type('test@guildhawk.com') // get the attribute 'type' and write the email
        cy.get("[type='password']").type('password')// get the attribute 'type' and write the password
        cy.get("[type='submit']").click()// click login button
    })
})
