import BasePage from "./basePage";

export class ArticlesPage extends BasePage {
  constructor() {
    super();
    this.url = 'articles.html';
  }
  goTo() {
    cy.visit(this.url)
      .url()
      .should('include', this.url);
  }
}

