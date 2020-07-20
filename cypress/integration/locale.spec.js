describe('test language selection', () => {
  it('successfully render ', () => {
    cy.visit('/')

    cy.get('[data-cy="de-checkbox"]').click()
    cy.get('[data-cy="de-locale"]').contains('German')
  })
})
