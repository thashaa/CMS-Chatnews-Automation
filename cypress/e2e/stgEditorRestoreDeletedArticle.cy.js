describe('CMS Staging: Editor Restore Deleted Article', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.viewport('macbook-13')
    cy.EditorLogin()
  });
  it('Restore Deleted Article', () => {
    cy.EditorAllPost()
    //go to trash page 
    cy.get(':nth-child(7) > .tabs-component-tab-a').contains('trash').click()
    cy.get('.tabs-component-tab.is-active > .tabs-component-tab-a > ').should('be.visible') //assert the publish tab is active 
    //select article from table to delete
    cy.get('table').get('thead > tr').should('have.length', 7)
     .get('td').should('be.visible')
   //select article and click trash 
     .get('#trash > .rounded-xl > .align-middle > .min-w-full > .text-sm > :nth-child(8) > :nth-child(10)')
     .contains('span', 'Restore').invoke('show')             
     .click({force: true})
    //pop up dialog 
    cy.get('.swal2-popup').contains('Yes, Move it!').click()
    //assertion: toast message
    cy.get('#swal2-title').contains('Restore success').should('be.visible')
  })
})
