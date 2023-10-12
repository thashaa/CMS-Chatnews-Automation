describe('CMS Staging Reporter Create Article', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.viewport('macbook-13')
    cy.ReporterLogin()
  });
  it('Create New Post', () => {
    cy.ReporterAllPost()
    cy.get('#__nuxt').contains('Create New Post')
    //write title
    cy.get('input[placeholder*="eg. News"]').type('This is from Automation '+ generate_random_string(50))
    //write excerpt
    cy.get('textarea[placeholder*="Please write short excerpt here..."]').type('This is from Automation '+ generate_random_string(50))
    //select category
    cy.get('.el-select__input').click()
    cy.get('.el-tree').should('be.visible').contains(/^news$/).click()
    //click this to close the category dropdown
    cy.get('.mb-8 > .text-base').click() 
    //input tag
    cy.get('.multiselect__placeholder').click()
      .get('input[placeholder*="Type to search or add tag"]').type(Cypress.env('Tag')+("{enter}"))
    //click this to back to default state
    cy.get('.mb-8 > .text-base').click()
    //select picture 
    cy.get('.flex-col > .absolute').click()
    cy.get('.hidden').invoke('show') //show pop up assertion
      //select picture, force click  pic because Cypress do not support hover 
    cy.get(':nth-child(4) > div > button:contains("Add")').invoke('show').click({force: true})
    //select content type 
    cy.get('select').select('article')
    //type article content 
    cy.get('.ProseMirror').type(generate_random_string(1000))
    //tap save 
    cy.get('button:contains("Save")').click()
    //confirmation dialog 
    cy.get('.swal2-popup').should('be.visible')
    cy.get('button:contains("NEWSBASKET")').click()
    
    //assertion: get 1st row of newsbasket table
    cy.get('.min-w-full > .text-sm > :nth-child(1) > :nth-child(1)').should('be.visible')
    //assertion: toast message
    cy.get('#swal2-title').contains('Save newsbasket success').should('be.visible')

    //function to generate random string 
    function generate_random_string(string_length) {
      let random_string = '';
      let random_ascii;
      for(let i = 0; i < string_length; i++) {
          random_ascii = Math.floor((Math.random() * 25) + 97);
          random_string += String.fromCharCode(random_ascii)
      }
      return random_string
    }
})

})
