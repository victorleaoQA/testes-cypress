/// <reference types="cypress"/>


describe('Funcionalidade Login', () => {
  
  context("Funcionalidade Login", () => {
    beforeEach(() => {
      cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    });
  
  
  
    it("Dad", () => {
      // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get("#username").type("aluno_ebac@teste.com");
      cy.get("#password").type("teste@teste.com");
      cy.get(".woocommerce-form > .button").click();
      cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
        "contain",
        "teste_aluno20"
      );
    });
  
    it("Deve exibir uma mensagem de erro ao inserir usuário inválido", () => {
      // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get("#username").type("aluno_ebac@teste.co");
      cy.get("#password").type("teste@teste.com");
      cy.get(".woocommerce-form > .button").click();
      cy.get(".woocommerce-error > li").should(
        "contain",
        "Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário."
      );
    });
  
    it("Deve exibir uma mensagem de erro ao inserir senha inválida", () => {
      // cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
      cy.get("#username").type("aluno_ebac@teste.com");
      cy.get("#password").type("teste@teste.co");
      cy.get(".woocommerce-form > .button").click();
      cy.get(".woocommerce-error > li").should(
        "contain",
        "Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?"
      );
    });
  });
});


