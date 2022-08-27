/// <reference types="cypress"/>

const faker = require("faker-br");

describe("Funcionalidade pré-cadastro", () => {
  beforeEach(() => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
  });

  //   afterEach(() => {
  //     cy.screenshot()
  //   });

  it.only("Deve completar o pré-cadastro com sucesso", () => {
    let emailFake = faker.internet.email();
    let nomeFake = faker.name.firstName();
    let sobrenomeFake = faker.name.lastName();


    cy.get("#reg_email").type(emailFake);
    cy.get("#reg_password").type("teste@teste123");
    cy.get(":nth-child(4) > .button").click();
    cy.get(".woocommerce-MyAccount-content > :nth-child(2)").should(
      "contain.text",
      "Olá"
    );
    cy.get(".woocommerce-MyAccount-navigation-link--edit-account > a").click();
    cy.get("#account_first_name").type(nomeFake);
    cy.get("#account_last_name").type(sobrenomeFake);
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
  });

  it("Deve aparecer uma mensagem de erro ao tentar fazer o pré-cadastro com um email já registrado", () => {
    cy.get("#reg_email").type("aluno@aluno.com");
    cy.get("#reg_password").type("teste@teste123");
    cy.get(":nth-child(4) > .button").click();
    cy.get(".woocommerce-error > li").should(
      "contain",
      "Erro: Uma conta já está registrada com seu endereço de e-mail. Faça login."
    );
  });
});
