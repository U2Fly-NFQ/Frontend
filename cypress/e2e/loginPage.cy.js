/* eslint-disable */
const screenSize = ['macbook-15', 'ipad-2', 'samsung-s10']

describe('login page', () => {
  it('should visit login page', () => {
    cy.viewport(screenSize[0])
    cy.visit('http://localhost:3000/login')
    cy.get('.login-banner__text').should('have.text', 'Log In')
  })
  it('should login success and redirect to flight', () => {
    cy.viewport(screenSize[0])
    cy.get('#login-form #login-form_username')
      .should('be.visible')
      .type('user@gg.com')
    cy.get('#login-form #login-form_password').should('be.visible').type('123')
    cy.get('#login-form .form-submit .btn').click()
    cy.get(
      '.flight-list-page .flight-list-banner__text h1.ant-typography'
    ).should('have.text', 'EXPLORE THE WORLD WITH US')
  })
})
