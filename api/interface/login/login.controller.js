const models = require('../../model/user/User');
const systemMessage = require('../../../config/systemMessage');
const express = require('express');
const router = express.Router();
const commonUtil = require('../common/commonUtil');


exports.login = (req,res) => {
  const userId = req.body.userId || '';
  const userPassword = req.body.userPassword || '';

  if(!userId.length){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "userId" , req:userId});
  }

  if(!userPassword.length){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "userPassword" , req:userPassword});
  }

  return models.User.findOne({
            where: {
                userId: req.body.userId,
                userPassword: commonUtil.passwordEncrypt(req.body.userPassword)
            }
        })
        .then((user, err) => {
            if (err) {
              return res.json({
                'error': err
              });
            }else if (!user){ // user 값이 잘못된 값이면 바로 401 에러 뱉음
              return res.status(401).json({error:systemMessage.login.invalidInfo});
            } else {
              return res.json(user.userId);
            }
        });
};




