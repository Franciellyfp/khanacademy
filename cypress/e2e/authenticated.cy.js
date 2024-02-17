import { faker } from '@faker-js/faker/locale/en'



describe('Scenarios where authentication is a pre-condition', () => {
  beforeEach(() => {
    cy.sessionLogin()
  })

  it('Create a class', () => {
    const className = faker.lorem.words(4)
    const student = faker.name.firstName()

    cy.createClass(className, student)
  })

  it.only('Recommend content', () => {

    const className = faker.lorem.words(4)
    const student = faker.name.firstName()

    cy.createClass(className, student)
    cy.recommendContent()
  })

  it('Remove student', () => {
    const className = faker.lorem.words(4)
    const student = faker.name.firstName()

    cy.createClass(className, student)
    cy.removeStudent()
  })
})