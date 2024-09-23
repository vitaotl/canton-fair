const { createServer } = require('http');
const next = require('next');
 
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
 
app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res);
  }).listen(21011, err => {
    if (err) console.log('error', err);
    console.log('> Ready on http://localhost:21011');
  });
});
 