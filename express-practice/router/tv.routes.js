const express = require('express');
const getalltvsController = require('../controller/getalltvs.controller');
const gettvByModelController = require('../controller/gettvByModel.controller');
const createTvController = require('../controller/createtv.controller');

const router = express.Router();

router.get('/all', getalltvsController);
router.get('/', gettvByModelController);
router.post('/', createTvController);

module.exports = router;
