const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const tvRouter = require('./router/tv.routes');
const orderRouter = require('./router/order.routes');
const app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());

app.use('/tv', tvRouter);
app.use('/order', orderRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
