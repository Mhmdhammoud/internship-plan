console.log('Loading Main.js file....');

const clickme = () => {
  const myh2 = document.getElementById('myh2');
  if (myh2.style.display !== 'none') {
    myh2.style.display = 'none';
  } else {
    myh2.style.display = 'block';
  }
};

const increase = () => {
  const counter = document.getElementById('counter');
  let value = parseInt(counter.innerText);
  value += 1;
  counter.innerText = value;
};

const decrease = () => {
  const counter = document.getElementById('counter');
  let value = parseInt(counter.innerText);
  value -= 1;
  counter.innerText = value;
};

const submitData = () => {
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const data = {
    email: email.value,
    password: password.value,
  };
  fetch('http://localhost:3000/user/login', {
    method: 'POST', // Specify the request method
    headers: {
      'Content-Type': 'application/json', // Set the request header to JSON
    },
    body: JSON.stringify(data), // Convert data object to JSON string
  })
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
      console.log('Success:', data); // Handle success
    })
    .catch((error) => {
      console.error('Error:', error); // Handle errors
    });
};
