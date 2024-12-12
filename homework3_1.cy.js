describe('Login Tests for The Internet', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login');
    });
  
    it('Should display an error for incorrect credentials', () => {
      cy.get('#username').type('wrongUser');
      cy.get('#password').type('wrongPassword');
      cy.get('button[type="submit"]').click();
  
      cy.get('#flash').should('be.visible').and('contain', 'Your username is invalid!');
  
      cy.url().should('include', '/login');
    });
  
    it('Should login successfully with valid credentials', () => {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('button[type="submit"]').click();
  
      
      cy.get('#flash').should('be.visible').and('contain', 'You logged into a secure area!');
  
      
      cy.url().should('include', '/secure');
    });
  
    it('Should validate error for empty credentials', () => {
      cy.get('button[type="submit"]').click();
  
      cy.get('#flash').should('be.visible').and('contain', 'Your username is invalid!');
    });
  
    it('Should use then() to verify dynamic content after login', () => {
      cy.get('#username').type('tomsmith');
      cy.get('#password').type('SuperSecretPassword!');
      cy.get('button[type="submit"]').click();
  
      cy.get('#flash').then(($flash) => {
        const message = $flash.text().trim();
        expect(message).to.include('You logged into a secure area!');
      });
  
      cy.get('a.button').should('be.visible').and('contain', 'Logout');
    });
  });
  