describe('CMS Staging: Editor Permanently Delete Article from Trash', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.viewport('macbook-13')
    cy.EditorLogin()
  });
  it('Permanently Delete Article from Trash', () => {
    cy.EditorAllPost()
    //go to Trash tab 
    cy.get(':nth-child(7) > .tabs-component-tab-a').contains('trash').click()
    cy.get('.tabs-component-tab.is-active > .tabs-component-tab-a > ').should('be.visible') //assert the trash tab is active 
    //select article from table to delete
    cy.get('table').get('thead > tr').should('have.length', 7)
     .get('td').should('be.visible')
   //select article and click delete 
     .get('#trash > .rounded-xl > .align-middle > .min-w-full > .text-sm > :nth-child(1) > :nth-child(10)')
     .contains('span', 'Delete').invoke('show')             
     .click({force: true})
    //pop up dialog 
    cy.get('.swal2-popup').contains('Yes, Delete it!').click()
    //assertion: toast message
    cy.get('#swal2-title').contains('Deleted success').should('be.visible')
  })
})
