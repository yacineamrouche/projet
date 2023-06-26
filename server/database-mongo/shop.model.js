const mongoose = require("mongoose");
const db = require("./index.js");

const clothesSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  price:String,
  categories: {
    type: String,
    enum: ["femme", "Homme", "enfant"],
    default: "clothes"
  }
});

const clothes = mongoose.model("clothes", clothesSchema);

module.exports = clothes;