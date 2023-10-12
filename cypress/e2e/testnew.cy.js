describe('test', () => {
    beforeEach(() => {
      cy.clearCookies();
      cy.clearLocalStorage();
      cy.reload()
      cy.viewport('macbook-13')
      cy.ReporterLogin()
    })
})