const models = require('../../model/concert/Concert');
const systemMessage = require('../../../config/systemMessage');

exports.index = (req,res) => {
  return models.Concert.findAll({
   order: [['concertName', 'ASC']]
  }).then(concert => {
    return res.json(concert)
  })
  .catch(function (err) {
      console.log(err);
      return res.status(500).json(err)
  });
};

exports.show = (req,res) => {
  const concertId = req.params.concertId || '';

  return models.Concert.findOne({
    where: {
        concertId: concertId
    }
  }).then(concert => {
    if (!concert){
      return res.status(404).json({error:systemMessage.search.targetMissing});
    }
    return res.json(concert)
  })
  .catch(function (err) {
      console.log(err);
      return res.status(500).json(err)
  });
};

/** 추가 */
exports.create = (req,res) => {

  const concertName = req.body.concertName || '';
  const place = req.body.place || '';
  const price= req.body.price || 0;
  if(!concertName.length){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "concertName" , req:concertName});
  }
  if(!place.length){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "place" , req:place});
  }
  if(!price){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "price" , req:price});
  }
  const newDate = new Date()
  const time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');
  return models.Concert.create({
    concertName :concertName,
    place: place,
    price: price,
    regDt: time
  }).then((concert) => {
    return res.status(201).json(concert)
  }).catch(function (err) {
      console.log(err);
      return res.status(500).json(err)
  });
};

/** 수정 */
exports.update = (req,res) => {  
  const concertId = req.params.concertId || '';
  const concertName = req.body.concertName || '';
  const place = req.body.place || '';
  const price= req.body.price || 0;
  if(!concertName.length){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "concertName" , req:concertName});
  }
  if(!place.length){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "place" , req:place});
  }
  if(!price){
    return res.status(400).json({error:systemMessage.search.incorrectKey + "price" , req:price});
  }

  const newDate = new Date()
  const time = newDate.toFormat('YYYY-MM-DD HH24:MI:SS');
  return models.Concert.update({
    concertName :concertName,
    place: place,
    price: price,
    updDt: time
  } , {
    where: {
      concertId: concertId,
    }
  }).then(()=>{
      return models.Concert.findOne({
        where: {
          concertId: concertId
        }
     });
   }).then((concert) => {
     if(concert == null) {
       return res.status(404).json(systemMessage.search.targetMissing);
     }else{
       return res.status(200).json(concert);
     }
    })
   .catch(function (err) {
       return res.status(500).json(err);
   });
};
