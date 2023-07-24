Cypress.Commands.add('Login', (email, senha) => {
 cy.visit('minha-conta')
 email = Cypress.env('email')
 senha = Cypress.env('password')
 cy.get('#username').type(email)
 cy.get('#password').type(senha, {log: false})
 cy.contains('input[type=submit]', 'Login').click()
})


Cypress.Commands.add('Endereço', (Nome, Sobrenome, Trabalho, País, Rua, Casa, Cidade, Estado, Cep, Telefone) => {
    cy.get('#billing_first_name')
    .clear()
    .type(Nome)
    cy.get('#billing_last_name')
    .clear()
    .type(Sobrenome)
    cy.get('#billing_company')
    .clear()
    .type(Trabalho)
    cy.get('#select2-billing_country-container').type(País)
    cy.contains('.select2-results__option', 'Brasil').click(); 
    cy.get('#billing_address_1')
    .clear()
    .type(Rua)
    cy.get('#billing_address_2')
    .clear()
    .type(Casa)
    cy.get('#billing_city')
    .clear()
    .type(Cidade)
    cy.get('#select2-billing_state-container').type(Estado)
    cy.contains('.select2-results__option', 'Pernambuco').click(); 
    cy.get('#billing_postcode')
    .clear()
    .type(Cep)
    cy.get('#billing_phone')
    .clear()
    .type(Telefone)
    cy.get('#terms').click()
    cy.get('#place_order').click()
})

Cypress.Commands.add('Produto', (Roupa, Tamanho, Cor) => {
    cy.contains('[class="product-block grid"]', Roupa).click()
    cy.get(`.button-variable-item-${Tamanho}`).click()
    cy.get(`.button-variable-item-${Cor}`).click()
    cy.get('.single_add_to_cart_button').click()
    
   
})