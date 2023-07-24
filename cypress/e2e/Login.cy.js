describe('Funcionalidade login', () => {
  beforeEach(() => {
    cy.visit('minha-conta')
  });
  it('Login utilizando custom commands', () => {
   cy.Login()
  });

  const usuarios = require('../e2e/dados/example.json')
usuarios.forEach( usuario => {
    it('Login de usuário com massa de dados', () => {
      cy.get('#username').type(usuario.email)
      cy.get('#password').type(usuario.senha)
      cy.contains('input[type=submit]', 'Login').click()          
    });
})    

});

