import { Given } from "cypress-cucumber-preprocessor/steps";

const url = 'https://google.com'
Given('I open Google page', () => {
    cy.visit(url)
})

When('I see "Google" in the title', ()=>{
    cy.log("This is the Google page")
})