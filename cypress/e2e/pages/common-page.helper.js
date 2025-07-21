import { CommonPageConstants } from "./common-page.constants";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageHelper {

    static navigateToTheApp() {
        cy.visit(CommonPageConstants.appUrl);
    }

    static clickOnBtnIngresar() {
        CommonPageElements.btnIngresar.click();
    }

    static clearInputs() {
        cy.get('form').within(() => {
            cy.get('input').each(($input) => {
                cy.wrap($input).clear();
            });
        });
    }

    static createNewProduct(newProduct) {
        cy.fixture('newProduct').then(product => {
            this.clearInputs();
            CommonPageElements.inputCodigoSku.type(product.codigo_sku);
            CommonPageElements.inputDescription.type(newProduct);
            CommonPageElements.inputStock.type(product.stock);
            CommonPageElements.inputCostPrice.type(product.costo);
            CommonPageElements.inputSalePrice.type(product.precio_venta);
            CommonPageElements.inputSizeUnit.select(product.unidad);
            cy.get('button[type="submit"]').click();

        }

        )
    }
}