import { CommonPageConstants } from "./common-page.constants";

export class CommonPageElements{
    static get btnIngresar(){
        return cy.get('button[type="submit"]');
    }

    static get inputEmail(){
        return cy.get('input#email');
    }

    static get inputPassword(){
        return cy.get('input#password');
    }

    static get dashboardTitle(){
        return cy.contains('h1', 'Dashboard');
    }

    static get articlesLink(){
        return cy.get('a[href="/articulos"]');
    }

    static get entidadesLink(){
        return cy.contains('span', 'Entidades');
    }

}