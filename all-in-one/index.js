const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const connectDb = require('./utils/connectDb');
const courseRoutes = require('./routes/course.routes');
const usersRoutes = require('./routes/user.routes');
const majorRoutes = require('./routes/major.routes');
dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/courses', courseRoutes);
app.use('/users', usersRoutes);
app.use('/majors', majorRoutes);

connectDb().then(() => {
  console.log('DB connected');
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
  });
});
