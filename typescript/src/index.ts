import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(morgan('dev'));
app.use(cors());

app.get('/', async (req, res) => {
  return res.status(400).json({
    message: 'Hello World',
  });
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});
