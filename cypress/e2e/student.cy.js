describe('Student enters a course and views the class', () => {
  it('student', () => {
    cy.guiLoginStudent()
    cy.student()
  })
})