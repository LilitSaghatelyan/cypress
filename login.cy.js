
const extractCredentials = (text) => {
    const usernameMatch = text.match(/Enter (\w+) for the username/);
    const passwordMatch = text.match(/and ([\w!]+) for the password/);
  
    return {
      username: usernameMatch ? usernameMatch[1] : null,
      password: passwordMatch ? passwordMatch[1] : null,
    };
  };
  
  describe.only('Login Tests with Hooks', () => {
    let credentials;
  
    before(() => {
      cy.log('Initializing Login Test Suite');
    });
  
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/login'); 
      cy.log('Navigated to the login page');
  
      cy.get('#content > div > h4')
        .invoke('text')
        .then((text) => {
          credentials = extractCredentials(text); 
        });
    });
  
    afterEach(() => {
      cy.log('Test case completed');
    });
  
    after(() => {
      cy.log('Login Test Suite Completed');
    });
  
    it('should log in successfully with valid credentials', () => {
      expect(credentials.username, 'Username should be extracted').to.not.be.null;
      expect(credentials.password, 'Password should be extracted').to.not.be.null;
  
      cy.get('#username').type(credentials.username);
      cy.get('#password').type(credentials.password);
      cy.get('button[type="submit"]').click();
  
      cy.get('.flash.success')
        .should('be.visible')
        .and('contain.text', 'You logged into a secure area!');
    });
  });
  