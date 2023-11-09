const mongoose = require("mongoose")
const kangarooSchema = mongoose.Schema({
    k_name: String,
    k_age: Number,
    k_jumpheight: Number
})
module.exports = mongoose.model("kangaroo",
kangarooSchema)