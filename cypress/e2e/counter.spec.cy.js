describe('Counter spec', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should render', () => {
    cy.get('#counter').should('contain', '1');
  });
});
