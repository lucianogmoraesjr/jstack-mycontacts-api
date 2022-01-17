const express = require('express');

const routes = require('./routes');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use(routes);
app.use((error, request, response, next) => {
// eslint-disable-next-line no-console
  console.log(error);
  response.sendStatus(500);
});

// eslint-disable-next-line no-console
app.listen(3333, () => console.log('🔥 Server started at http://localhost:3333'));
