import { CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper{

    static navigateToTheApp(){
        cy.visit(CommonPageConstants.appUrl);
    }

    static clickOnBtnIngresar(){
        CommonPageElements.btnIngresar.click();
    }
}