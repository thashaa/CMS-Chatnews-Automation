describe('CMS Staging Editor Create Scheduled Article', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.reload()
    cy.viewport('macbook-13')
    cy.EditorLogin()
  });
  it('Create New Post', () => {
    cy.EditorAllPost()
    cy.get('button').contains('create new').click()

    //write title
    cy.get('input[placeholder*="eg. News"]').type('This is from Automation '+ generate_random_string(50))

    //write excerpt
    cy.get('textarea[placeholder*="Please write short excerpt here..."]').type('This is from Automation '+ generate_random_string(50))

    //schedule publish
    cy.get(".dp__input_wrap").click()
      //assert the calendar is visible
      .get(".dp__instance_calendar").should("be.visible")
      //function to get tomorrow date 
      const today = new Date();
      let tmr = new Date();
      tmr.setDate(today.getDate() + 1); //this result -> date in ISO 8061 format
      let tomorrow = tmr.getDate(); //this is to get date only in non date format 
    cy.get(".dp__calendar_item").contains(tomorrow).click() // this to click tomorrow date from calendar 
    
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
    cy.get('button:contains("Scheduled")').click()

    //confirmation dialog 
    cy.get('.swal2-popup').should('be.visible')
    cy.get('button:contains("PUBLISH")').click()
    
    //assertion: toast message
    cy.get('#swal2-title').contains('Save publish success').should('be.visible')

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
