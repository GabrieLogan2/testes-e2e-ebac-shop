describe('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    beforeEach(() => {
          cy.get('#username').type('logangaabriel@gmail.com')
      cy.get('#password').type('biel@123')
      cy.contains('input[type=submit]', 'Login').click() 
       
    });
      /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */
    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
       

        cy.visit('produtos')
        cy.Produto('Abominable Hoodie', 'XS', 'Blue')
       
        cy.visit('produtos/page/2/')
        cy.Produto('Atomic Endurance Running Tee (Crew-Neck)', 'M', 'Black')
        
        cy.visit('produtos/page/2/')
         cy.Produto('Atomic Endurance Running Tee (Crew-Neck)', 'S', 'Black')

         cy.visit('produtos/page/2/')
         cy.Produto('Autumn Pullie', 'M', 'Purple')

        cy.visit('carrinho')
        cy.get('tr.cart_item').should('have.length', 3)
        
        cy.get('.checkout-button').click()
        cy.Endereço('Gabriel', 'Logan', 'Teste', 'Brasil', 'Avenida', 'Casa', 'Paulista', 'Pernambuco', '55480000', '(79) 3426-8871')
        cy.get('.page-title').should('have.text', 'Checkout')
    });
});
