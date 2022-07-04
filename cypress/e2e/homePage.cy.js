/* eslint-disable */
const screenSize = ['macbook-15', 'ipad-2', 'samsung-s10']
describe('home page', () => {
  it('should visit home page', () => {
    cy.viewport(screenSize[0])
    cy.visit('http://localhost:3000')
    cy.get('.home-list-banner__text').should(
      'have.text',
      'THE WHOLE WORLD AWAITS'
    )
  })
  it('should go to login page', () => {
    cy.viewport(screenSize[0])
    cy.get('.sub-nav-list-actions  .sub-nav-list__item:first').click()
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/login')
    })
  })
})
