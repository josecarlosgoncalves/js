// servidor com exporess e rotas para /, /about, /contact
const express = require('express');
const app = express();
const PORT = 3000;  
app.get(['/', '/home'], (req, res) => {
        res.send(`
        <!DOCTYPE html>
        <html lang="pt">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>PORTOFOLIO Page</title>
            <style>
                body { font-family: Arial, sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
                .container { max-width: 700px; margin: 40px auto; background: #fff; padding: 32px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
                h1 { color: #2c3e50; }
                nav a { margin-right: 16px; color: #2980b9; text-decoration: none; font-weight: bold; }
                nav a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Home Page</h1>
                <p>Bem-vindo à página inicial do site!</p>
                <nav>
                    <a href="/about">Sobre</a>
                    <a href="/contact">Contato</a>
                </nav>
                <hr>
                <section>
                    <h2>Conteúdo principal</h2>
                    <p>Esta é uma página criada por Jose Carlos Gonçalves.</p>
                </section>
            </div>
        </body>
        </html>
        `);
});
app.get('/about', (req, res) => {
    res.send(`<h1>About Page</h1>
        <p>This is the About Page.</p>
        <a href="/">Home</a>`);
});
app.get('/contact', (req, res) => {
    res.send(`<h1>Contact Page</h1>
        <p>This is the Contact Page.</p>
        <a href="/">Home</a>`);
});
app.use((req, res) => {
    res.status(404).send(`<h1>404 Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/">Home</a>`);
}); 
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});
