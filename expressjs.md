# Express Js

## What is Express

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed to make the process of building web applications and APIs much simpler and faster.

## How to use Express

1- Install Express using npm:

```bash
npm install express
```

2- Create a new Express app:

```javascript
const express = require('express');
const app = express();
```

3- Define routes:

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!');
});
```

4- Start the server:

```javascript
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
