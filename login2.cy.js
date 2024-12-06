describe('Login with Invalid Credentials', () => {
    before(() => {
      cy.log('Initializing Login Test Suite');
    });
  
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login'); 
      cy.log('Navigated to the login page');
    });
  
    afterEach(() => {
      cy.log('Test completed');
    });
  
    after(() => {
      cy.log('Login Test Suite Completed');
    });
  
    it('should display an error message with invalid credentials', () => {
      cy.get('#username').type('invalidUser');
      cy.get('#password').type('SuperSecretPassword!');
      
      cy.get('button[type="submit"]').click();
      
      cy.get('.flash.error')
        .should('be.visible')
        .and('contain.text', 'Your username is invalid!');
    });
  });
  