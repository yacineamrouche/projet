const express = require("express");
const itemRoutes = require('./routes/item.routes')

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
const db = require('./database-mongo');
const cors=require("cors")
const app = express();
const PORT = 3000

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/items", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port !"+PORT);
});



//fgerzg
// const postOne= function(req,res){
//   shop.create(req.body)
//   then((shops) => {
//       res.status(200).send(shops);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// }

// const update=function(req,res){
//   shop.create(req.body)
//   then((shops) => {
//       res.status(200).send(shops);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// }


// const deleteItem=function(req,res){
//   shop.deleteOne(req.body)
//   then((shops) => {
//       res.status(200).send(shops);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// }