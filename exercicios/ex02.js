// servidor basico http com rotas para /, /about, /contact
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    if (path === '/' || path === '/home') {
        res.end(`<h1>Home Page</h1>
            <p>Welcome to the Home Page!</p>
            <a href="/about">About</a><p>Welcome to the Home Page!</p>
            <a href="/about">About</a>`);       
    }
    else if (path === '/about') {
        res.end(`<h1>About Page</h1>
            <p>This is the About Page.</p>
            <a href="/">Home</a>`);
    }
    else if (path === '/contact') {
        res.end(`<h1>Contact Page</h1>
            <p>This is the Contact Page.</p>
            <a href="/">Home</a>`);
    }
    else {
        res.statusCode = 404;
        res.end(`<h1>404 Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Home</a>`);
    }});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}/`);
});