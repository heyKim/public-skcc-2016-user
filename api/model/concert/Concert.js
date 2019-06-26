const server = require('../models.js');
const Sequelize = require('sequelize');

const Concert = server.define('concert' , {
//예약번호
concertId : {
    type : Sequelize.INTEGER,
    allowNull : false,
    primaryKey : true,
    autoIncrement: true
},
//공연장 명
concertName : {
    type : Sequelize.STRING(100),
    allowNull : false
},
//공연장 주소
place : {
    type : Sequelize.STRING(100),
    allowNull : false
},
//공연장 가격
price : {
    type : Sequelize.INTEGER
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
    Concert : Concert
}
