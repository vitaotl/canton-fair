const { createServer } = require('http');
const https = require('https');
const next = require('next');
const fs = require('fs');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log(path.join(__dirname, 'key/key.pem'))


app.prepare().then(() => {
  // Produção: Use HTTPS
  const sslOptions = {
    key: fs.readFileSync(path.join(__dirname, 'key', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'key', 'cert.pem'))
  };

  https.createServer(sslOptions, (req, res) => {
    handle(req, res);
  }).listen(21011, err => {
    if (err) throw err;
    console.log('> Ready on https://localhost:21011');
  });

});
