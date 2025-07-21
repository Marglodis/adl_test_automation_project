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
import { CommonPageHelper } from "../e2e/pages/common-page.helper";
import { CommonPageElements } from "../e2e/pages/common-page.elements";
// -- This is a parent command --
//Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('loginValido', () => {
  cy.fixture('credentials').then(user => {
    CommonPageHelper.navigateToTheApp();
    CommonPageElements.inputEmail.type(user.emailValido);
    CommonPageElements.inputPassword.type(user.passwordValido);
    CommonPageHelper.clickOnBtnIngresar();
    CommonPageElements.dashboardTitle.should('be.visible');
  });
});

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