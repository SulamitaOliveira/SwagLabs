import { swagPage } from "./page/swagPage";

Cypress.Commands.add('login', (item) => {

    swagPage.userNameInput().click().type('standard_user');
    swagPage.passwordInput().click().type('secret_sauce');
    swagPage.buttonLogin().click();
    swagPage.titleProducts().should('contain', 'Products');
});

Cypress.Commands.add('formulary', (item) => {
    swagPage.firstNameInput().click().type('Teste');
    swagPage.lastNameInput().click().type('Automatizado');
    swagPage.postalCodeInput().click().type('04895340');
    swagPage.buttonContinue().click();
});

Cypress.Commands.add('addToCart', (item) => {
    swagPage.buttonAddToCart().click();
    swagPage.clickCart().click();


});