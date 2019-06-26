const server = require('../models.js');
const Sequelize = require('sequelize');

const User = server.define('user' , {
  //사용자 ID(이메일)
  userId : {
    type : Sequelize.STRING(100),
    allowNull : false,
    primaryKey : true
  },
  //사용자 비밀번호
  userPassword : {
    type : Sequelize.STRING(100),
    allowNull : false
  },
  //사용자 이름
  userName : {
    type : Sequelize.STRING(100),
    allowNull : false
  },
  //사용자 번호
  phoneNum : {
    type : Sequelize.STRING(100)
  },
  //생성날짜
  regDt : {
    type : Sequelize.DATE,
    defaultValue : Sequelize.NOW
  },
  //수정날짜
  updDt : {
    type :  Sequelize.DATE,
    defaultValue : Sequelize.NOW
  },
}, {underscored:true});


module.exports = {
    User : User
}
