describe('Counter spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should render', () => {
    cy.get('#counter').should('contain', '1');
  });

  it('should search for movie', function () {
    cy.get('.search-form input').type('my-movie');
    cy.get('.search-form button').click();
  });

  it('should select genre', function () {
    cy.get('.genre-select-list li')
      .eq(1)
      .should('not.to.have.class', 'selected')
      .click()
      .should('have.class', 'selected');
  });
});
