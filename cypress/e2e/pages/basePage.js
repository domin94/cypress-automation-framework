export default class BasePage {
  constructor() {
    this.url = ''
  }
  goTo(url = '/') {
    try {
      cy.visit(this.url = url)
        .url()
        .should('include', this.url)
    } catch (ex) {
      console.log('Visit error with url: ' + '\n' + url + '\n' + ex)
    }
    return this
  }
}