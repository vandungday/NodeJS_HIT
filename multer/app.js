const express = require("express");
const multer = require("multer");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const uploadspModel = require("./model/uploadsp");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public//images");
    },
    filename: function(req, file, cb) {
        // const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, Date.now() + "-" + file.originalname);
    },
});

const upload = multer({ storage: storage });

mongoose
    .connect("mongodb://localhost:27017/sanpham")
    .then(() => {})
    .catch((err) => {
        console.log(err.message);
    });

app.get("/", (req, res) => {
    res.render("index");
});

var images = [];

app.post("/upload", upload.any(), (req, res) => {
    var temp = req.files[0].filename;
    images.push(temp);
    res.status(200).send(req.files);
});

app.post("/uploadsanpham", (req, res) => {
    var ten = req.body.ten;
    var gia = req.body.gia;
    var sanpham = {
        ten: ten,
        gia: gia,
        anh: images,
    };
    var dulieu = new uploadspModel(sanpham);
    dulieu.save();
    res.render("thanhcong");
});

app.get("/xemsp", (req, res) => {
    uploadspModel.find({}, (err, dulieu) => {
        res.render("xemsp", { data: dulieu });
    });
});

app.listen(port, () => {
    console.log(`Listen port ${port}`);
});