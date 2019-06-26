const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const controller = require('./concert.controller');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
//모든 공연장 리스트 조회
router.get('/', controller.index);

//특정 공연장 정보 조회
router.get('/:concertId', controller.show);

//공연장 추가
router.post('/', controller.create);

//공연장 수정
router.put('/:concertId',  controller.update);
module.exports = router;
