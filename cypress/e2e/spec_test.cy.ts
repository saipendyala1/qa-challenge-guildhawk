describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000/') // change URL to match your dev URL
    cy.title().should('eq','Language List')
  })
})