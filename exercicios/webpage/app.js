const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.get(['/', '/home'], (req, res) => {
  const filePath = path.join(__dirname, 'home.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao carregar a página.');
    } else {
      res.send(data);
    }
  });
});

// Repita para about.html e contact.html

app.get(['/about'], (req, res) => {
  const filePath = path.join(__dirname, 'about.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao carregar a página.');
    } else {
      res.send(data);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});