describe('Login Tests for The Internet', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Should display an error for incorrect credentials', () => {
    cy.login('wrongUser', 'wrongPassword'); 
    cy.get('#flash').should('be.visible').and('contain', 'Your username is invalid!');

    
    cy.url().should('include', '/login');
  });

  it('Should login successfully with valid credentials', () => {
    cy.login('tomsmith', 'SuperSecretPassword!'); 

    
    cy.get('#flash').should('be.visible').and('contain', 'You logged into a secure area!');

    cy.url().should('include', '/secure');
  });

  it('Should use then() to verify dynamic content after login', () => {
    cy.login('tomsmith', 'SuperSecretPassword!'); 

    
    cy.get('#flash').then(($flash) => {
      const message = $flash.text().trim();
      expect(message).to.include('You logged into a secure area!');
    });

    cy.get('a.button').should('be.visible').and('contain', 'Logout');
  });

  it('Should validate error for empty credentials', () => {
    cy.get('button[type="submit"]').click();

    cy.get('#flash').should('be.visible').and('contain', 'Your username is invalid!');
  });
});
