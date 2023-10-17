// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('AdminLogin', () => {
    cy.visit('https://staging-chatnews-cms.indoteam.id/');
    cy.get('input#email').type(Cypress.env('Email_admin'))
    cy.get('input#password').type(Cypress.env('Password_admin'))
    cy.get('button:contains("Sign In")').click()
})
Cypress.Commands.add('EditorLogin', () => {
    cy.visit('https://staging-chatnews-cms.indoteam.id/');
    // Type information
    cy.get('input#email').type(Cypress.env('Email_editor'))
    cy.get('input#password').type(Cypress.env('Password_editor'))
    cy.get('button:contains("Sign In")').click()
})
Cypress.Commands.add('AsstEditorLogin', () => {
    cy.visit('https://staging-chatnews-cms.indoteam.id/');
    // Type information
    cy.get('input#email').type(Cypress.env('Email_assteditor'))
    cy.get('input#password').type(Cypress.env('Password_assteditor'))
    cy.get('button:contains("Sign In")').click()
})
Cypress.Commands.add('ReporterLogin', () => {
    cy.visit('https://staging-chatnews-cms.indoteam.id/');
    // Type information
    cy.get('input#email').type(Cypress.env('Email_reporter'))
    cy.get('input#password').type(Cypress.env('Password_reporter'))
    cy.get('button:contains("Sign In")').click()
})
Cypress.Commands.add('ReporterAllPost', () => {
    cy.get('#headlessui-menu-button-1 > .ml-3').contains('reporter')
    cy.get(':nth-child(1) > .group').click()
    cy.get('#__nuxt').contains('Posts')
    cy.get('button').contains('create new').click()
})
Cypress.Commands.add('EditorAllPost', () => {
    cy.get('#__nuxt')
    cy.wait(3000)
    cy.get('#headlessui-menu-button-1 > .ml-3').contains('editor')
    cy.get('#sidebar').contains('All Post').click()
    cy.get('#__nuxt').contains('Posts')
    //assert editor have publish tab 
    cy.get(':nth-child(6) > .tabs-component-tab-a').contains('publish')
})
//keep login in entire test 
let LOCAL_STORAGE_MEMORY = {};
Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
      LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
});
Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
      localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
});




