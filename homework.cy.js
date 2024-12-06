describe('Login Tests',()=>{

	before(()=>{
		cy.log('Starting test suite');
	});
 beforeEach(()=>{
	 cy.visit('https://the-internet.herokuapp.com/login');
 });

afterEach(()=>{
	cy.log('Test completed');
});

after(()=>{
	cy.log('Test  suite completed');
});

it('User should be able to log in',()=>{
 cy.get('#username').type('tomsmith');
 cy.get('#password').type('SuperSecretPassword!');
 cy.get('button[type="submit"]').click();
});
});
