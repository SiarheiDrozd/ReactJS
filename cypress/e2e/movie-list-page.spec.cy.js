describe('Movie list page spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should render', () => {
    cy.get('header').should('exist');
    cy.get('main').should('exist');
  });

  it('should search for movie', function () {
    cy.get('.search-form input').type('Fifty');
    cy.get('.search-form button').click();
    cy.get('.filter-results b').should('contain', '3');
  });

  it('should select genre', function () {
    cy.get('.genre-select-list li')
      .eq(1)
      .should('not.to.have.class', 'selected')
      .click()
      .should('have.class', 'selected');
  });

  it('should sort movies', function () {
    cy.get('.genre-select-list li')
      .eq(1)
      .should('not.to.have.class', 'selected')
      .click()
      .should('have.class', 'selected');
  });
});
