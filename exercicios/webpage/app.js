const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
const PORT = 3000;

app.get(['/', '/public/index'], (req, res) => {
  const filePath = path.join(__dirname, 'public/index.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao carregar a página.');
    } else {
      res.send(data);
    }
  });
});

// about.html 

app.get(['/public/about','/about'], (req, res) => {
  const filePath = path.join(__dirname, 'public/about.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao carregar a página.');
    } else {
      res.send(data);
    }
  });
});

// contact.html
app.get(['/public/contact','/contact'], (req, res) => {
  const filePath = path.join(__dirname, 'public/contact.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao carregar a página.');
    } else {
      res.send(data);
    }
  });
});

// projects.html
app.get(['/public/projets','/projects'], (req, res) => {
  const filePath = path.join(__dirname, 'public/projects.html');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Erro ao carregar a página.');
    } else {
      res.send(data);
    }
  });
});


// 404 para outras rotas
app.use((req, res) => {
  res.status(404).send(`<h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Home</a>`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});