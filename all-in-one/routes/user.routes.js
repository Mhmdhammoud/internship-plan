const express = require('express');
const getAllUsers = require('../controllers/users/getAllUsers');
const getUser = require('../controllers/users/getUser');
const createUser = require('../controllers/users/createUser');
const updateUser = require('../controllers/users/updateUser');
const deleteUser = require('../controllers/users/deleteUser');
const loginUser = require('../controllers/users/loginUser');
const authenticate = require('../middleware/authenticate');
const router = express.Router();

router.get('/all', authenticate, getAllUsers);
router.get('/', authenticate, getUser);
router.post('/', authenticate, createUser);
router.put('/', authenticate, updateUser);
router.delete('/', authenticate, deleteUser);
router.post('/login', loginUser);

module.exports = router;
