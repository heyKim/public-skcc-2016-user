const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const controller = require('./user.controller');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/dupleCheck/:userId', controller.dupleCheck);
router.post('/', controller.create);

module.exports = router;
