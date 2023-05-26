describe('ep-shared-ui: EpSharedUi component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=epsharedui--primary'));

  it('should render the component', () => {
    cy.get('h1').should('contain', 'Welcome to EpSharedUi!');
  });
});
