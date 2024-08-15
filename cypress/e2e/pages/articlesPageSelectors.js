const dataTestId = (value) => `[data-testid="${value}"]`;
const getArticleTitleById = (id) => `[data-testid="article-${id}-title"] a`;
const seeArticleById = (id) => `#seeArticle${id}`;


export const articlesFloatingBar = {
	FLOATING_BAR: '.navigation-bar',
	PREV_BUTTON: '#btnPrev',
	NEXT_BUTTON: '#btnNext',
	CURRENT_PAGE_NUMBER: dataTestId('current-page'),
	TOTAL_PAGES_NUMBER: dataTestId('total-pages'),
	SELECT_ITEMS: dataTestId('per-page-select')
};

export const articlesListing = {
	ARTICLE_TITLE: (id) => getArticleTitleById(id),
	SEE_MORE_BUTTON: (id) => seeArticleById(id)
};

export const article = {
	ARTICLE_BODY: dataTestId('article-body'),
};
