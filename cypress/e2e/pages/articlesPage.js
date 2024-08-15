import BasePage from './basePage';
import {
  articlesListing,
  articlesFloatingBar,
  article,
} from './articlesPageSelectors';

export class ArticlesPage extends BasePage {
  constructor() {
    super();
    this.url = 'articles.html';
  }
  goTo = () => {
    cy.visit(this.url).url().should('include', this.url);
  };

  getArticleTitleSelector(id) {
    return articlesListing.ARTICLE_TITLE(id);
  }

  getArticleContent() {
    return cy.get(article.ARTICLE_BODY);
  }

  clickSeeMoreButton(id) {
    return cy.get(articlesListing.SEE_MORE_BUTTON(id)).click();
  }

  clickNextButton() {
    return cy.get(articlesFloatingBar.NEXT_BUTTON).click();
  }

  getArticleByTitle = (id, title, maxRetries = 9) => {
    cy.wrap(0).as('retryCount');

    let attemptFind = () => {
      cy.get('@retryCount').then((retryCount) => {
        if (retryCount >= maxRetries) {
          cy.wrap().then(() => {
            throw new Error(`Article not found after ${maxRetries} attempts`);
          });
        }

        cy.get('body').then(($body) => {
          if ($body.find(this.getArticleTitleSelector(id)).length > 0) {
            cy.log(`Article with title '${title}' exists`);
          } else {
            cy.get('@retryCount').then((count) =>
              cy.wrap(count + 1).as('retryCount')
            );
            this.clickNextButton();
            attemptFind();
          }
        });
      });
    };

    attemptFind();
  };
}
