import {ArticlesPage} from "../pages/articlesPage";
import {articles, articlesFloatingBar} from "../pages/articlesPageSelectors";

const articlesPage = new ArticlesPage();

describe('', () => {
  const TITLE = 'The principles of agile software development';
  let articleId;

  beforeEach(() => {
    articlesPage.goTo();
  });

  it('', () => {
    cy.apiGetArticleId(TITLE).then((id) => {
      articleId = id;
      getArticleByTitle(articleId, TITLE);
      });
    });
});

function getArticleByTitle(id, title) {
  cy.get(articles.ARTICLE_CARD(id)).then(($el) => {
    if ($el.find(articles.ARTICLE_TITLE(id)).length > 0) {
      cy.log('article with title ' + title + ' exists');    } else {
      cy.get(articlesFloatingBar.NEXT_BUTTON).click().then(() => {
        getArticleByTitle(id, title);
      });
    }
  });
}