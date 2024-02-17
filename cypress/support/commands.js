Cypress.Commands.add('guiLoginTeacher', (email = Cypress.env('USER_EMAIL_TEACHER'), password = Cypress.env('USER_PASSWORD_TEACHER')) => {
  cy.visit('/login')
  cy.get('#uid-login-form-0-wb-id-identifier-field').type(email)
  cy.get('#uid-labeled-text-field-1-wb-id-field').type(password, { log: false })
  cy.get('[data-test-id="log-in-submit-button"]').click()
  cy.contains('._1d7kv5ok', 'Turmas').should('be.visible')
})

Cypress.Commands.add('guiLoginStudent', (email = Cypress.env('USER_EMAIL_STUDENT'), password = Cypress.env('USER_PASSWORD_STUDENT')) => {
  cy.visit('/login')
  cy.get('#uid-login-form-0-wb-id-identifier-field').type(email)
  cy.get('#uid-labeled-text-field-1-wb-id-field').type(password, { log: false })
  cy.get('[data-test-id="log-in-submit-button"]').click()
  cy.contains('[data-learn-menu-trigger="true"]','Cursos').should('be.visible')
})

Cypress.Commands.add('sessionLogin', (username = Cypress.env('USER_EMAIL_TEACHER'), password = Cypress.env('USER_PASSWORD_TEACHER')) => {
  const login = () => cy.guiLoginTeacher(username, password)
  cy.session(username, login)
})

Cypress.Commands.add('createClass', (class_name, student) => {
  cy.visit('/teacher/dashboard')
  cy.get('[data-test-id="add-new-class"]').click()
  cy.get('[data-test-id="class-name-input-field"]').type(class_name)
  cy.get('[data-test-id="go-next-button"]').click()
  cy.get('[data-test-id="class-picker-item-0-0"] > ._1y8zoyl > ._xe15d2').check()
  cy.get('[data-test-id="go-next-button"]').click()
  cy.get('[data-test-id="class-picker-item-0-0"] > ._1y8zoyl > ._xe15d2').click()
  cy.get('[data-test-id="create-students-without-email"]').click()
  cy.get('[data-test-id="new-student-name-0"]').type(student)
  cy.get('._1mlh5kdu').click()
  cy.get('[data-test-id="go-next-button"]').click()
  cy.get('[data-test-id="class-creator-skip-button"]').click()
  cy.get('[data-test-id="go-next-button"]').click()
  cy.get('._1rdao6di').click()
  cy.contains('._19etdzks', 'Lista de alunos').should('be.visible')
})

Cypress.Commands.add('recommendContent', () => {
  cy.get('[data-test-id="assignments-subsection"]').click()
  cy.get('[data-test-id="nav-create-assignments"]').click()
  cy.get('[data-test-id="row-checkbox-0"]').check()
  cy.get('[data-test-id="multi-assign-btn"]').click()
  cy.get('[data-test-id="new-assignment-post-button"]').click()
  cy.get('[data-test-id="multi-assign-btn"]').should('be.disabled')
})

Cypress.Commands.add('removeStudent', () => {
  cy.get('[data-test-id="student-table-checkbox-0"]').check()
  cy.get('[data-test-id="student-actions-link"]').click()
  cy.get('[data-test-id="remove-from-class-option"]').click()
  cy.get('[data-test-id="confirmation-modal-submit"]').click()
  cy.get('[data-test-id="empty-state-add-students-button"]').should('be.visible')
})

Cypress.Commands.add('student', () => {
  cy.get('[data-learn-menu-trigger="true"]').click()
  cy.get('[data-navigable-index="1"]').click()
  cy.get('#uid-popover-1-wb-id-anchor').should('be.visible')
})