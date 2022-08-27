/// <reference types="cypress"/>

context('Funcionalidade Login', () => {

   beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
   });

    it('Deve fazer login com sucesso', () => {
        // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'teste_aluno20')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
        // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.co')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });

    it('Deve exibir uma mensagem de erro ao inserir senha invalida', () => {
        // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.co')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });
    
});