describe('CMS Staging Login as Editor', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.viewport('macbook-13')
  });

  it('Sign In Button is Visible and Clickable', () => {
    // Visit website.
    cy.visit('https://staging-chatnews-cms.indoteam.id/');
    cy.get('#__nuxt').should('be.visible')
    cy.contains('Sign In').should('be.visible').click()
  })
  it('Input and sign in', () => {
    cy.EditorLogin()
    cy.get('#__nuxt').contains('editor')
  })
})