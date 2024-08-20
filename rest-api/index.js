const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/', (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Path:', req.path);
  return next();
});

const tv = require('./models/tv');
const allTvs = [];

app.get('/get-all-tvs', (req, res) => {
  return res.status(200).json({
    message: 'Success',
    data: allTvs,
  });
});

app.post('/create-tv', (req, res) => {
  const newTv = new tv(req.body);
  allTvs.push(newTv);
  return res.status(200).json({
    message: 'Success',
  });
});
app.get('/get-tv-by-model', (req, res) => {
  try {
    if (!req.query.model) {
      return res.status(400).json({
        message: 'Expected model in query params',
        data: null,
      });
    }
    const tvToBeFound = allTvs.find(
      (item) =>
        item.model.toLowerCase().trim() ===
          req.query.model.toLowerCase().trim() &&
        item.size === parseInt(req.query.size)
    );
    if (!tvToBeFound) {
      return res.status(404).json({
        message: 'Success',
        data: null,
      });
    } else {
      return res.status(200).json({
        message: 'Success',
        data: tvToBeFound,
      });
    }
  } catch (error) {
    console.log(error.message);

    return res.status(500).json({
      message: 'Error',
    });
  }
});
app.get('*', (req, res) => {
  res.send('404 Page Not Found');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
