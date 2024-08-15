const dataTestId = (value) => `[data-testid="${value}"]`;
const getArticleCardById = (id) => `[data-testid="article-${id}"]`;
const getArticleTitleById = (id) => `[data-testid="article-${id}-title"]`;
const getArticleBodyById = (id) => `[data-testid="article-${id}-body"]`;

export const articlesFloatingBar = {
  FLOATING_BAR:'.navigation-bar',
  PREV_BUTTON: '#btnPrev',
  NEXT_BUTTON: '#btnNext',
  CURRENT_PAGE_NUMBER: dataTestId('current-page'),
  TOTAL_PAGES_NUMBER: dataTestId('total-pages'),
  SELECT_ITEMS: dataTestId('per-page-select')
}

export const articles = {
  ARTICLE_CARD: (id) => getArticleCardById(id),
    ARTICLE_TITLE: (id) => getArticleTitleById(id),
    ARTICLE_BODY: (id) => getArticleBodyById(id)
}