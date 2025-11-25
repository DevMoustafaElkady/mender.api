const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/places', require('./app/routes/place.routes'));

// Sample route
// app.get("/hello", (req, res) => {
//   //   res.send('Hello World!');
//   res.json({ message: "Hello World!" });
// });

// app.get("/data/:age", (req, res) => {
   // res.json({ data: [1, 2, 3, 4, 5] });
//   res.json({
//     queryParams: req.query,
//     params: req.params,
//     headers: req.headers,
//     body: req.body,
//   });
// });

// app.post("/add/place", (req, res) => {
//   const place = req.body;
//   // Here you would typically add the place to your database
//   res.status(200).json({
//     message: "Place added successfully",
//     place: place,
//   });

//   res.json({
//     body: req.body,
//   });
// });

// app.delete("/delete/place/:id", (req, res) => {
//   const ids = [1, 2, 3, 4, 5];
//   const placeId = Number(req.params.id);
//   const placeIndex = ids.indexOf(placeId);
//   ids.splice(placeIndex, 1);
//   console.log(placeIndex);
//   // Here you would typically delete the place from your database
//   res.status(200).json({
//     ids: ids,
//     placeId: placeId,
//     placeIndex: placeIndex,
//     message: `array is , ${ids} Place with id ${placeId} deleted successfully, ${placeIndex}`,
//   });
// });

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app;
