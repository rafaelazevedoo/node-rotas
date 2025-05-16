import express from 'express';

const app = express();
const PORT = 3000;

app.get('/produtos', (req, res) => {
  const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, categoria: 'Eletrônicos' },
    { id: 2, nome: 'Smartphone', preco: 2500, categoria: 'Eletrônicos' },
    { id: 3, nome: 'Cadeira Gamer', preco: 900, categoria: 'Móveis' },
    { id: 4, nome: 'Fone de Ouvido', preco: 300, categoria: 'Acessórios' },
  ];

  res.json(produtos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
