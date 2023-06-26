const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/e-commerce";
mongoose.connect(mongoUri).then(()=>console.log("db connected")).catch((err)=>console.log(err+'error conction'))


// mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
//   console.log("db connected");
// });
const db = mongoose.connection;


module.exports = db