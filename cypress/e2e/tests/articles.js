import { ArticlesPage } from '../pages/articlesPage';

const articlesPage = new ArticlesPage();

describe('', () => {
	const TITLE = 'The principles of agile software development';
	let articleId;

	before(() => {
		articlesPage.goTo();
	});

	it('', () => {
		cy.apiGetArticleId(TITLE).then((id) => {
			articleId = id;
			articlesPage.getArticleByTitle(articleId, TITLE);
		});
	});
});
