describe('Endereço', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });
    it('Iserindo endereço do usuário', () => {
           cy.get('#username').type('logangaabriel@gmail.com')
      cy.get('#password').type('biel@123')
      cy.contains('input[type=submit]', 'Login').click() 
        cy.Endereço()
        cy.contains('.woocommerce-message', 'Endereço alterado com sucesso').should('be.visible')

    });

    const usuarios = require('../e2e/dados/example.json')
    usuarios.forEach( usuario => {
        it('Login de usuário com massa de dados e alterando endereços de cada user', () => {
          cy.get('#username').type(usuario.email)
          cy.get('#password').type(usuario.senha)
          cy.contains('input[type=submit]', 'Login').click() 
          
          cy.Endereço()
        });
    })
}) 
