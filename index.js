// const express = require('express');

// const app = express();

// app.get('/',(req, res) => {
//     res.sendStatus('Olá, Mundo');
// });

import express from 'express';

const app = express();
const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
  res.send('Bem-vindo ao React App!');
});

// Rota para cada seção
app.get('/home', (req, res) => {
  res.send('Página Home');
});

app.get('/about', (req, res) => {
  res.send('Página About');
});

app.get('/features', (req, res) => {
  res.send('Página Features');
});

app.get('/contact', (req, res) => {
  res.send('Página Contact');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
