const models = require('../../model/user/User');
const systemMessage = require('../../../config/systemMessage');
const commonUtil = require('../common/commonUtil');
require('date-utils');

exports.dupleCheck = (req,res) => {
  const userId = req.params.userId || '';

  if(!userId.length){
    //error 메세지는 공통으로 systemMessage에 선언해서 사용
    return res.status(400).json({error:systemMessage.search.incorrectKey + "userId" , req:userId});
  }

  return models.User.findOne({
    where: {
      userId: userId
    }
  }).then(user => {
      if (!user){
        return res.status(200).json({row: '0'});
      }
      return res.status(200).json({row: '1'});
  }).catch(function (err) {
      console.log(err);
      return res.status(500).json(err);
  });
};

exports.create = (req,res) => {
  const userId = req.body.userId || '';
  const userPassword = req.body.userPassword || '';
  const userName = req.body.userName || '';
  const phoneNum = req.body.phoneNum || '';

  //정규식으로 ID 형식 체크
  var validCheckUserId = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;

  if(validCheckUserId.test(userId) === false) {
    //error 메세지는 공통으로 systemMessage에 선언해서 사용
    return res.status(400).json(systemMessage.createUser.invalidEmailFormat);
  }

  //정규식으로 비밀번호 형식 체크
  var validCheckPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
  if(validCheckPassword.test(userPassword) === false) {
    return res.status(400).json(systemMessage.createUser.invalidPasswordFormat);
  }
  const newDate = new Date()
  const time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');
  return models.User.findOne({
    where: {
      userId: userId
    }
  }).then(user => {
      if (user){
        return res.status(409).json(systemMessage.search.targetMissing);
      }

      return models.User.create({
          userId: userId,
          userPassword: commonUtil.passwordEncrypt(userPassword),
          userName: userName,
          phoneNum: phoneNum,
          regDt: time,
      }).then((user) => res.status(201).json(user))
      .catch(function (err) {
          console.log(err);
          return res.status(500).json(err);
      });
  }).catch(function (err) {
        console.log(err);
        return res.status(500).json(err);
  });
};

