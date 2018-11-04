context('App', () => {
  it('should have a heading', () => {
    cy.visit('/')
    cy.contains('Welcome to productivity-coach!')
  })
})
