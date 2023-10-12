/*
NOTES
Line 27: (:nth-child(5)) -> pointed 'edit'
Line 25: (:nth-child(1) > :nth-child(1)) -> the first nth child is to point the title column and the second nth child is to point the title row 
*/


describe('CMS Staging: Editor Publish Article from Newsbasket without Edit', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.viewport('macbook-13')
    cy.EditorLogin()
  });
  it('Publish Article on Newsbasket', () => {
    cy.EditorAllPost()
    //go to newsbasket page 
    cy.get(':nth-child(2) > .tabs-component-tab-a').contains('newsbasket').click()
    cy.get('.tabs-component-tab.is-active > .tabs-component-tab-a > ').should('be.visible') //assert the newsbasket tab is active 
    //select 1st article to edit
    cy.get('table').get('thead > tr').should('have.length', 7)
      .get('td').should('be.visible')
    //click edit 
      .get('#newsbasket > .rounded-xl > .align-middle > .min-w-full > .text-sm > :nth-child(1) > :nth-child(5)') 
      .contains('span', 'Edit') .invoke('show')             
      .click({force: true})
    //go to edit page 
    cy.get('.relative')
      .get('button:contains("Save To Draft")') //assert it redirect to right page from newsbasket > edit 
    //publish w/o edit  
    cy.get('button:contains("Publish")').scrollIntoView().click()
      .get('form').submit()
    //assertion: toast message
    cy.get('#swal2-title').contains('Update post success').should('be.visible')
  })
})
