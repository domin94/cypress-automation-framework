export default class BasePage {
  constructor() {
    this.url = '';
  }
  goTo(url = '/') {
    cy.visit((this.url = url))
      .url()
      .should('include', this.url);
  }
}
