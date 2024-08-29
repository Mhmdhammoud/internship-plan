const express = require('express');
const getMajor = require('../controllers/major/getMajor');
const createMajor = require('../controllers/major/createMajor');
const updateMajor = require('../controllers/major/updateMajor');
const deleteMajor = require('../controllers/major/deleteMajor');
const getAllMajors = require('../controllers/major/getAllMajors');

const router = express.Router();

router.get('/all', getAllMajors);
router.get('/', getMajor);
router.post('/', createMajor);
router.put('/', updateMajor);
router.delete('/', deleteMajor);

module.exports = router;
