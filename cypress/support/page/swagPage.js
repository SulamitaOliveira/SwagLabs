class SwagPage {
  visit(url = 'https://www.saucedemo.com/v1/index.html') {
    cy.visit(url);
  }

  userNameInput() {
    return cy.get('#user-name');
  }

  passwordInput() {
    return cy.get('#password');
  }

  buttonLogin() {
    return cy.get('#login-button');
  }

  titleProducts() {
    return cy.get('.product_label');
  }

  titleDescription() {
    return cy.get('[data-test="cart-desc-label"]');
  }

  product() {
    return cy.get('.cart_item_label');
  }

  errorMensage() {
    return cy.get('[data-test="error"]');
  }

  selectProduct() {
    return cy.get('#item_4_img_link > .inventory_item_img');
  }

  clickCart() {
    return cy.get('.svg-inline--fa.fa-shopping-cart');
  }

  buttonAddToCart() {
    return cy.get(':nth-child(2) > .pricebar > .btn_primary');
  }

  buttonAddCartSecundary() {
    return cy.get('.btn_primary btn_inventory');
  }

  buttonRemove() {
    return cy.get('.item_pricebar > .btn_secondary');
  }

  buttonContinueShopping() {
    return cy.get('.cart_footer > .btn_secondary');
  }

  buttonCheckout() {
    return cy.get('.btn_action');
  }

  titleInformation() {
    return cy.get('.subheader');
  }

  firstNameInput() {
    return cy.get('[data-test="firstName"]');
  }

  lastNameInput() {
    return cy.get('[data-test="lastName"]');
  }

  postalCodeInput() {
    return cy.get('[data-test="postalCode"]');
  }

  buttonContinue() {
    return cy.get('.btn_primary');
  }

  buttonCancel() {
    return cy.get('.cart_cancel_link');
  }

  descriptionCheckout() {
    return cy.get('.cart_item_label');
  }

  buttonFinish() {
    return cy.get('.btn_action');
  }

  mensage() {
    return cy.get('#checkout_complete_container');
  }

  buttonBackHome() {
    return cy.get('[data-test="back-to-products"]');
  }
}

export const swagPage = new SwagPage();