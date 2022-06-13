const express = require('express')

const app = express();
const PORT = process.env.PORT || 3000;

const next = require('next')

const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });

const handler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.all('*', (req, res) => handler(req, res));
  app.listen(PORT, (err) => {
    if (err) console.error(err);
    else console.log(`Server listening @ ${PORT}`);
  });
});