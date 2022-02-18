const express = require("express");
const isAtTime = require("./middleware/isAtTime");
const app = express();
//middleware global to read the JSON type
app.use(express.json());
//middleware global to be at time
app.use(isAtTime);
app.use(express.static("front"));

// app.get("/styles/style.css", (req, res) => {
//   res.sendFile(__dirname + "/styles/style.css");
// });

const PORT = 8000;
app.listen(PORT, (err) =>{
  if (err) throw err ;
  else
   console.log("server is running")
});