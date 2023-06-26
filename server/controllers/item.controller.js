// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require("../database-mysql");
const shop = require('../database-mongo/shop.model.js');


// UNCOMMENT IF USING MONGOOSE WITH PROMISES
const selectAll = function (req, res) {
  shop.find({})
    .then((item) => {
      res.status(200).send(item);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};


const postOne = async function (req, res) {
  try {
    const item = await shop.create(req.body);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json(error);
  }
};

const update=function(req,res){
    shop.updateOne(req.params,req.body)
    .then((item) => {
        res.status(200).send(item);
      })
    .catch((error) => {
        console.log(error);
        res.status(500).send(error);
      });
}


const deleteItem=function(req,res){
    console.log(req.params);
    shop.deleteOne(req.params)
    .then((item) => {
        res.status(200).send(item);
      })
      .catch((error) => {
        console.log(error);
        res.status(500).send(error);
      });
}

module.exports = { selectAll,postOne,update,deleteItem };
