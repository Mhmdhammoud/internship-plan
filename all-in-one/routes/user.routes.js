const express = require('express');
const getAllUsers = require('../controllers/users/getAllUsers');
const getUser = require('../controllers/users/getUser');
const createUser = require('../controllers/users/createUser');
const updateUser = require('../controllers/users/updateUser');
const deleteUser = require('../controllers/users/deleteUser');

const router = express.Router();

router.get('/all', getAllUsers);
router.get('/', getUser);
router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;
