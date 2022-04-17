// app.get("/", (req, res) => {
//     res.render("index");
// });

// app.get("/about", (req, res) => {
//     res.render("about");
// });

// app.get("/post", (req, res) => {
//     res.render("post");
// });

// app.get("/contact", (req, res) => {
//     res.render("contact");
// });

// app.get("/edu", (req, res) => {
//     var ds = { danhsachsv: ["a", "b", "c"] };
//     res.render("edu", { title: "Edu", danhsach: ds });
// });

// app.get("/them", (req, res) => {
//     res.render("them", { title: "Thêm dữ liệu" });
// });

// app.post("/them", (req, res) => {
//     var dulieu = {
//         ten: req.body.ten,
//         dienthoai: req.body.dt,
//     };

//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("mydb");
//         dbo.collection("customers").insertOne(dulieu, function(err, res) {
//             if (err) throw err;
//             console.log("1 document inserted");
//             db.close();
//         });
//     });

//     res.redirect("/them");
// });
// app.get("/xem", (req, res) => {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("mydb");
//         dbo
//             .collection("customers")
//             .find({})
//             .toArray(function(err, result) {
//                 if (err) throw err;
//                 db.close();
//                 res.render("xem", { title: "Xem dữ liệu", data: result });
//             });
//     });
// });

// app.get("/xoa/:id", (req, res) => {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("mydb");
//         var id = converOjectId(req.params.id);
//         dbo.collection("customers").deleteOne({ _id: id }, function(err, obj) {
//             if (err) throw err;
//             res.redirect("/xem");
//             console.log("1 document deleted");
//             db.close();
//         });
//     });
// });

// app.get("/sua/:id", (req, res) => {
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("mydb");
//         var id = converOjectId(req.params.id);
//         dbo
//             .collection("customers")
//             .find({ _id: id })
//             .toArray(function(err, result) {
//                 if (err) throw err;
//                 db.close();
//                 res.render("sua", { title: "Sửa dữ liệu", data: result });
//             });
//     });
// });

// app.post("/sua/:id", (req, res) => {
//     var id = converOjectId(req.params.id);
//     var dulieu = {
//         ten: req.body.ten,
//         dienthoai: req.body.dt,
//     };
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("mydb");
//         var newvalues = { $set: dulieu };
//         dbo
//             .collection("customers")
//             .updateOne({ _id: id }, newvalues, function(err, res) {
//                 if (err) throw err;
//                 console.log("1 document updated");
//                 db.close();
//             });
//     });
//     res.redirect("/xem");
// });