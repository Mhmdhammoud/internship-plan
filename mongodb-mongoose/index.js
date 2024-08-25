const mongoose = require('mongoose');

// Connect to MongoDB
mongoose
  .connect(
    'mongodb+srv://admin:jIF4c2USmbwebLyS@maincluster.tjoas.mongodb.net/tutorial'
  )
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err.message);
  });

const userSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phoneNumber: Number,
  id: Number,
});

const UserModel = mongoose.model('users', userSchema);

// UserModel.create({
//   fullName: 'John Doe',
//   email: 'john@mailinator.com',
//   phoneNumber: 1234567890,
//   id: 'abc',
// }).then(() => {
//   console.log('User created');
// });

// UserModel.find().then((users) => {
//   console.log(users);
// });

UserModel.findById('66cb886bf4f41ff6034c3bb1').then((user) => {
  console.log(user);
});
