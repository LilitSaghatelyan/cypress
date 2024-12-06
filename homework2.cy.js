describe('Forgot Password Tests', () => {
	  before(() =>{
 cy.log('Starting Forgot Password test suite');
		       });
	beforeEach(() => {
		
cy.visit('https://the-internet.herokuapp.com/forgot_password');
		            });
	afterEach(() => {
		   cy.log('Test completed');
		               });
	after(() => {
  cy.log('Forgot Password test suite completed');
		   });
  it('User should be able to submit the Forgot Password form', () =>
	  {
 cy.get('#email').type('test@example.com');
		   cy.get('#form_submit').click();
		                 });
		    });
		 
