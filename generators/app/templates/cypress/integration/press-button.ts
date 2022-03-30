describe('The Home Page', () => {
  it('should successfully load', () => {
    cy.visit('/')
  })

  it('should increment counter', () => {
    cy.visit('/')

    cy.findByRole('button').click()

    cy.findByRole('heading').should('have.text', '1')
  })
})
