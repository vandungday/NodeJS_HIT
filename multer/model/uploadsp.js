const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Sanpham = new Schema({
    ten: String,
    gia: Number,
    anh: Array,
}, { collection: "uploadsp" });

const User = mongoose.model("uploadsp", Sanpham);

module.exports = User;