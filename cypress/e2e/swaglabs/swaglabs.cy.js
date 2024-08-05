import { swagPage } from '../../support/page/swagPage';

describe('Swag Labs', () => {
  beforeEach(() => {
    // Dado que o usuário acesse a página “Swag Labs”
    cy.viewport(1400, 768);
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

  
  it('Validando Login com usuário válido', () => {
    swagPage.userNameInput().click().type('standard_user');
    swagPage.passwordInput().click().type('secret_sauce');
    swagPage.buttonLogin().click();
    swagPage.titleProducts().should('contain', 'Products');
  });


  it('Validando Login com usuário inválido', () => {
    swagPage.userNameInput().click().type('Teste');
    swagPage.passwordInput().click().type('secret_sauce');
    swagPage.buttonLogin().click();
    // Validando a mensagem de erro para usuário inválido
    swagPage.errorMensage().should('be.visible').and('contain', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Validando cenário de erro ao clicar no botão "Login" sem preencher os campos obrigatórios', () => {
    swagPage.userNameInput().click();
    swagPage.passwordInput().click();
    swagPage.buttonLogin().click();
    swagPage.errorMensage().should('be.visible').and('contain', 'Epic sadface: Username is required');
  });

  it('Validando a funcionalidade do botão "Add to cart"', () => {
    cy.login();
    swagPage.selectProduct();
    cy.addToCart();
    swagPage.product();
  });

  it('Validando a funcionalidade do botão "Remove"', () => {
    cy.login();
    swagPage.selectProduct();
    cy.addToCart();
    swagPage.buttonRemove().click();
  });

  it('Validando a funcionalidade do botão "Continue Shopping"', () => {
    cy.login();
    swagPage.selectProduct();
    cy.addToCart();
    swagPage.buttonContinueShopping().click();
    swagPage.titleProducts().should('contain', 'Products');
  });

  it('Validando a funcionalidade do botão "Checkout"', () => {
    cy.login();
    swagPage.selectProduct();
    cy.addToCart();
    swagPage.buttonCheckout().click();
    swagPage.titleInformation().should('contain', 'Information');
  });

  it('Validando mensagem de erro caso não preencha o campo "Zip/Postal Code"', () => {
    cy.login();
    swagPage.selectProduct();
    cy.addToCart();
    swagPage.buttonCheckout().click();
    swagPage.firstNameInput().click().type('Teste');
    swagPage.lastNameInput().click().type('Automatizado');
    swagPage.postalCodeInput();
    swagPage.buttonContinue().click();
    // Validando mensagem de erro na tentativa de prosseguir com o campo vazio
    swagPage.errorMensage().should('be.visible').and('contain', 'Error: Postal Code is required');
  });

  it('Validando a funcionalidade do botão "Cancel"', () => {
    cy.login();
    swagPage.selectProduct();
    cy.addToCart();
    swagPage.buttonCheckout().click();
    swagPage.buttonCancel().click();
    swagPage.product().should('be.visible').and('contain', 'Sauce Labs Bike Light');
  });

  it('Validando a funcionalidade "Descripition" no checkout', () => {
    cy.login();
    swagPage.selectProduct();
    cy.addToCart();
    swagPage.buttonCheckout().click();
    cy.formulary();
    swagPage.descriptionCheckout().click();
    swagPage.product().should('be.visible').and('contain', 'Sauce Labs Bike Light');
  });

  it('Validando a funcionalidade do botão "Finish"', () => {
    cy.login();
    swagPage.selectProduct();
    cy.addToCart();
    swagPage.buttonCheckout().click()
    cy.formulary();
    swagPage.buttonFinish().click();
    // Validando mensagem após finalizar compra com sucesso
    swagPage.mensage().should('be.visible').and('contain', 'THANK YOU FOR YOUR ORDER');
  });



});


