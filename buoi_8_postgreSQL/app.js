const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://localhost:27017/hit";
const converOjectId = require("mongodb").ObjectId;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const { Pool, Client } = require("pg");
const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "nodepostgre",
    password: "123",
    port: 5432,
});

app.get("/", (req, res) => {
    pool.query("SELECT * FROM contact", (err, res) => {
        console.log(err, res);
        pool.end();
    });
    res.render("index");
});

app.get("/them", (req, res) => {
    res.render("them", { title: "Thêm dữ liệu" });
});

app.post("/them", (req, res) => {
    var ten = req.body.ten;
    var tuoi = req.body.dt;
    pool.query(
        "INSERT INTO contact(ten,tuoi) VALUES ($1,$2)  ", [ten, tuoi],
        (err, res) => {
            // pool.end();
        }
    );
    res.render("them", { title: "Thêm dữ liệu" });
});

// them du lieu - GET
app.get("/xem", function(req, res, next) {
    pool.query("SELECT * FROM contact ORDER BY id ASC ", (err, dulieu) => {
        res.render("xem", {
            title: "Xem dữ liệu trong PostgresQL",
            data: dulieu.rows,
        });
        // pool.end();
    });
});

// xoa du lieu
app.get("/xoa/:id", function(req, res, next) {
    var idcanxoa = req.params.id;
    pool.query(
        "DELETE FROM contact WHERE id = $1 ", [idcanxoa],
        (err, dulieu) => {
            // pool.end();
            res.redirect("/xem");
        }
    );
});

app.get("/sua/:id", (req, res) => {
    var id = req.params.id;
    pool.query("SELECT * FROM contact WHERE id = $1 ", [id], (err, dulieu) => {
        res.render("sua", {
            title: "Sua dữ liệu trong PostgresQL",
            data: dulieu.rows,
        });
    });
});

app.post("/sua/:id", (req, res) => {
    var ids = req.params.id;
    var ten = req.body.ten;
    var tuoi = req.body.dt;
    pool.query(
        "UPDATE contact SET ten = $1, tuoi = $2 WHERE id = $3 ", [ten, tuoi, ids],
        (err, res) => {}
    );
    res.redirect("/xem");
});

app.listen(port, () => {
    console.log(`Listen port ${port}`);
});