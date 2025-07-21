import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import { CommonPageElements } from "../pages/common-page.elements";


Given('el usuario está logueado en el dashboard', () => {
  cy.viewport(1280, 800);
  cy.loginValido();
});

// Consulta de Productos

When('navega a la sección de productos', () => {
  CommonPageElements.entidadesLink.click();
  CommonPageElements.articlesLink.should('be.visible');
  CommonPageElements.articlesLink.click();
  cy.url().should('include', '/articulos');
})

Then('debe ver la lista de productos disponibles', () => {
  cy.get('table').should('be.visible')
  cy.get('table tbody tr').should('have.length.at.least', 1)
})

And('consultar un producto del listado', () => {
  cy.get('table tbody tr').first().within(() => {
    // Validar que las celdas no estén vacías
    cy.get('td').each(($cell) => {
      cy.wrap($cell).should('not.be.empty');
    });

    cy.get('td').eq(0).click();
  });

  // Validar navegación al detalle
  cy.url().should('match', /\/articulos\/\d+$/);
});


