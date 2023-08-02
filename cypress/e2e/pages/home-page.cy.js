/// <reference types="cypress" />

describe('Visit Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays Logout button', () => {
    cy.get('.ant-btn').should('have.text', 'Logout')
  })

  it('displays Sidebar', () => {
    cy.get('.ant-layout-sider').should('be.visible')
  })

  it('displays Menu', () => {
    cy.get('.ant-menu').should('be.visible')
  })

  it('displays Menu Item "Profile"', () => {
    cy.get('.ant-menu-item')
      .should('have.length', 3)
      .first()
      .should('have.text', 'Profile')
  })
})
