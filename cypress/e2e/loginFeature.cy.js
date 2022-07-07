/* eslint-disable */
const screenSize = ['macbook-15', 'ipad-2', 'samsung-s10']
describe('home page', () => {
  it('should visit home page', () => {
    cy.viewport(screenSize[0])
    cy.visit('http://localhost:3000')
    cy.get('.top_destination_heading').should('have.text', 'Top destinations')
  })
  it('should go to login page', () => {
    cy.viewport(screenSize[0])
    cy.get('.sub-nav-list-actions  .sub-nav-list__item:first').click()
    cy.get('.login-page .content .ant-typography').should('have.text', 'Login')
  })
  it('should login success and redirect to flight', () => {
    cy.viewport(screenSize[0])
    cy.get('#login-form #login-form_username')
      .should('be.visible')
      .type('sang.nguyen@nfq.asia')
    cy.get('#login-form #login-form_password').should('be.visible').type('123')
    cy.get('#login-form .form-submit .btn').click()
    // cy.get(
    //   '.flight-list-page .flight-list-banner__text h1.ant-typography'
    // ).should('have.text', 'EXPLORE THE WORLD WITH US')
  })
})
