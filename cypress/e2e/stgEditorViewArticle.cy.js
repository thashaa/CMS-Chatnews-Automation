


describe('CMS Staging: Editor View Article', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.viewport('macbook-13')
    cy.EditorLogin()
  });
  it('View Article from All Post', () => {
    cy.EditorAllPost()
    //go to all tab 
    cy.get(':nth-child(1) > .tabs-component-tab-a').contains('all').click()
    cy.get('.tabs-component-tab.is-active > .tabs-component-tab-a > ').should('be.visible') //assert the all tab is active 
    //select 1st article to view
    cy.get('table').get('thead > tr').should('have.length', 7)
      .get('td').should('be.visible')
    //click view 
    cy.get('#all > .rounded-xl > .align-middle > .min-w-full > .text-sm > :nth-child(1) > :nth-child(10)') 
      .contains('span', 'View') .invoke('show')             
      .click({force: true})
    //go to the view article page 
    cy.get('h1').contains('Detail Post').should('be.visible')
  })
  it('View Article from Newsbasket Tab', () => {
    cy.EditorAllPost()
    //go to newsbasket tab 
    cy.get(':nth-child(2) > .tabs-component-tab-a').contains('newsbasket').click()
    cy.get('.tabs-component-tab.is-active > .tabs-component-tab-a > ').should('be.visible') //assert the newsbasket tab is active 
    //select 1st article to view
    cy.get('table').get('thead > tr').should('have.length', 7)
      .get('td').should('be.visible')
    //click view 
    cy.get('#newsbasket > .rounded-xl > .align-middle > .min-w-full > .text-sm > :nth-child(1) > :nth-child(5)') 
      .contains('span', 'View') .invoke('show')             
      .click({force: true})
    //go to the view article page 
    cy.get('h1').contains('Detail Post').should('be.visible')
  })
  it('View Article from Mine Tab', () => {
    cy.EditorAllPost()
    //go to mine tab 
    cy.get(':nth-child(3) > .tabs-component-tab-a').contains('mine').click()
    cy.get('.tabs-component-tab.is-active > .tabs-component-tab-a > ').should('be.visible') //assert the newsbasket tab is active 
    //select 1st article to view
    cy.get('table').get('thead > tr').should('have.length', 7)
      .get('td').should('be.visible')
    //click view 
    cy.get('#mine > .rounded-xl > .align-middle > .min-w-full > .text-sm > :nth-child(1) > :nth-child(10)') 
      .contains('span', 'View') .invoke('show')             
      .click({force: true})
    //go to the view article page 
    cy.get('h1').contains('Detail Post').should('be.visible')
  })
})
