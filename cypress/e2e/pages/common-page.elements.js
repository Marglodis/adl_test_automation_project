import { CommonPageConstants } from "./common-page.constants";

export class CommonPageElements {
    static get btnIngresar() {
        return cy.get('button[type="submit"]');
    }

    static get inputEmail() {
        return cy.get('input#email');
    }

    static get inputPassword() {
        return cy.get('input#password');
    }

    static get dashboardTitle() {
        return cy.contains('h1', 'Dashboard');
    }

    static get articlesLink() {
        return cy.get('a[href="/articulos"]');
    }

    static get entidadesLink() {
        return cy.contains('span', 'Entidades');
    }

    static get btnCreateArticle() {
        return cy.get('button.inline-flex').contains('Crear Artículo');
    }

    static get inputCodigoSku() {
        return cy.get('input#sku');
    }

    static get inputDescription() {
        return cy.get('input#name');
    }

    static get inputStock() {
        return cy.get('input#stock_quantity');
    }

    static get inputCostPrice() {
        return cy.get('input#cost_price');
    }

    static get inputSalePrice() {
        return cy.get('input#sale_price');
    }

    static get inputSizeUnit(){
        return cy.get('select#unit');
    }

}