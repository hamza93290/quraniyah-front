describe('My First Test', () => {
  it('Navigate to admin page', () => {
    cy.visit('/')
    cy.get('[data-cy="menu"]').click()
    cy.contains('Bienvenue sur l\'application ENEDISPO')
    cy.contains('Admin').click()
    cy.contains('Bienvenue sur la page d\'administrqtion d\'ENEDISPO')
    cy.url().should('include', '/admin')
  })
})
