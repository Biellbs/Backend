
// Importa o módulo Express (framework para APIs)
const express = require("express");

// Importa a biblioteca Faker.js (gera dados fictícios)
const { faker } = require("@faker-js/faker");

// Cria a instância principal do Express (nossa aplicação)
const app = express();

// Define a porta onde o servidor vai rodar
const port = 3000;

// Define o idioma para português do Brasil
faker.locale = "pt_BR";

/* 
=======================================================
🔹 ROTA 1: API de Usuários Aleatórios
=======================================================
*/
app.get("/api/usuarios", (req, res) => {
  // Captura o parâmetro qtd da URL (quantidade de usuários desejada).
  // Exemplo: /api/usuarios?qtd=10 → retorna 10 usuários.
  // Se não for informado, usa o valor padrão 5.
  const quantidade = req.query.qtd || 5;

  // Cria um array vazio para armazenar os usuários
  const usuarios = [];

  // Gera a quantidade de usuários solicitada
  for (let i = 0; i < quantidade; i++) {
    usuarios.push({
      id: faker.string.uuid(),          // ID único
      nome: faker.person.fullName(),    // Nome fictício
      email: faker.internet.email(),    // E-mail fictício
      telefone: faker.phone.number()    // Telefone fictício
    });
  }

  // Retorna os usuários em formato JSON
  res.json(usuarios);
});


/* 
=======================================================
🔹 ROTA 2: API de Produtos Aleatórios
=======================================================
*/
app.get("/api/produtos", (req, res) => {
  // Captura o parâmetro qtd da URL (quantidade de produtos desejada).
  // Exemplo: /api/produtos?qtd=8 → retorna 8 produtos.
  // Se não for informado, usa o valor padrão 5.
  const quantidade = req.query.qtd || 5;

  // Cria um array vazio para armazenar os produtos
  const produtos = [];

  // Gera a quantidade de produtos solicitada
  for (let i = 0; i < quantidade; i++) {
    produtos.push({
      id: faker.string.uuid(),                   // ID único
      nome: faker.commerce.productName(),        // Nome fictício de produto
      preco: faker.commerce.price(),             // Preço fictício
      descricao: faker.commerce.productDescription() // Descrição fictícia
    });
  }

  // Retorna os produtos em formato JSON
  res.json(produtos);
});
// Cria um endpoint GET com parâmetro de rota ":nome"
app.get('/api/produtos/categoria/:nome', (req, res) => {


  // Obtém o valor do parâmetro de rota ":nome" da URL
  // Exemplo: /api/produtos/categoria/eletronicos → categoria = "eletronicos"
  const categoria = req.params.nome;


  // Pega o parâmetro "qtd" da query string (ex.: ?qtd=10).
  // Se não for informado, usa o valor padrão 5.
  const quantidade = req.query.qtd || 5;
  

  // Cria um array vazio para armazenar os produtos gerados
  const produtos = [];

  // Loop para gerar a quantidade de produtos solicitada
  for (let i = 0; i < quantidade; i++) {
    produtos.push({
      id: faker.string.uuid(), // Gera um ID único
      nome: faker.commerce.productName(), // Nome fictício de produto
      preco: faker.commerce.price(), // Preço fictício
      descricao: faker.commerce.productDescription(), // Descrição fictícia
      categoria: categoria // Categoria informada na URL
    })
  }
  res.json(produtos)
})


/* 
=======================================================
🔹 INICIALIZAÇÃO DO SERVIDOR
=======================================================
*/
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
