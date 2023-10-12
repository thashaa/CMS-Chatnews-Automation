describe('CMS Staging: Editor Delete Published Article', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.viewport('macbook-13')
    cy.EditorLogin()
  });
  it('Delete Published Article', () => {
    cy.EditorAllPost()
    //go to publish tab 
    cy.get(':nth-child(6) > .tabs-component-tab-a').contains('publish').click()
    cy.get('.tabs-component-tab.is-active > .tabs-component-tab-a > ').should('be.visible') //assert the publish tab is active 
    //select article from table to delete
    cy.get('table').get('thead > tr').should('have.length', 7)
     .get('td').should('be.visible')
   //select article and click trash 
     .get('#publish > .rounded-xl > .align-middle > .min-w-full > .text-sm > :nth-child(8) > :nth-child(10)')
     .contains('span', 'Trash').invoke('show')             
     .click({force: true})
    //pop up dialog 
    cy.get('.swal2-popup').contains('Yes, Move it!').click()
    //assertion: toast message
    cy.get('#swal2-title').contains('Moved to trash success').should('be.visible')
  })
})
