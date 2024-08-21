# Rest API or RESTful API

## What is REST API

REST stands for Representational State Transfer. It is an architectural style that defines a set of constraints and properties based on HTTP. RESTful web services are stateless, meaning that calls can be made independently of one another, and each call contains all of the information necessary to complete it successfully.

## Why REST API

RESTful APIs are designed to be simple and lightweight, which makes them easy to use and understand. They are also scalable and flexible, allowing developers to build applications that can grow and evolve over time.

## REST API Methods

### There are four main HTTP methods used in RESTful APIs:

1. GET - Used to retrieve data from a server.
2. POST - Used to send data to a server to create a new resource.
3. PUT - Used to send data to a server to update an existing resource.
4. DELETE - Used to send data to a server to delete a resource.

### Secondary methods include:

1. PATCH - Used to send data to a server to update a resource.
2. OPTIONS - Used to retrieve information about the communication options available for a resource.
3. HEAD - Used to retrieve the headers for a resource.

### Request components

1. URL - The address of the resource being accessed.
2. Headers - Additional information about the request.
3. Body - The data being sent with the request.

### Response components

1. Status code - A three-digit code that indicates the status of the request.

- 1xx code indicates an informational response.
- 2xx code indicates a successful response.
- 3xx code indicates a redirection response
- 4xx code indicates a client error response.
- 5xx code indicates a server error response.

2. Headers - Additional information about the response.

3. Body - The data being sent back in response to the request.

### Methods of sharing data in REST API

1. Query parameters - Used to send data in the URL. (example.com?name=John&age=30)
2. Path parameters - Used to send data in the URL path. (example.com/users/123)
3. Request body - Used to send data in the request body.

## How to create a REST API in NodeJs using http module

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/all-orders' && req.method === 'GET') {
    // Get all orders
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Get all orders', orders: [] }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Not Found' }));
  }
});
```
