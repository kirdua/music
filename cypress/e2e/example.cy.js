// https://docs.cypress.io/api/introduction/api.html
/* eslint-disable prettier/prettier */
describe('Sanity test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('#header a:first-child', 'Music')
  })
})
