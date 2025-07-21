import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import { CommonPageElements } from "../pages/common-page.elements";
import { CommonPageHelper } from "../pages/common-page.helper";


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

// Registrar un producto

When('registra un nuevo producto con nombre {string}', (productName) =>{
    CommonPageElements.entidadesLink.click();
    CommonPageElements.articlesLink.click();
    CommonPageElements.btnCreateArticle.should('be.visible');
    CommonPageElements.btnCreateArticle.click();
    cy.url().should('include','/articulos/nuevo');
    CommonPageHelper.createNewProduct(productName);  
    cy.contains(`Articulo "${productName}" creado con éxito!`)
    //cy.get('div[data-in="true"]')
    
})

Then('el producto {string} debería estar en la lista',(productName)=>{
  cy.url().should('include', '/articulos');
  cy.get('table').should('be.visible');
  cy.contains(`${productName}`)
})