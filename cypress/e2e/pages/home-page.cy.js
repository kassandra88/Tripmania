/// <reference types="cypress" />

describe('Visit Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays Logout button', () => {
    cy.contains('button', 'Logout')
  })

  it('displays Header', () => {
    cy.get('.ant-layout-header').should('be.visible')
  })

  it('displays Login button', () => {
    cy.contains('button', 'Login')
  })
})
