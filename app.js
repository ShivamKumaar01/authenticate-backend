const express = require("express");
const app = express();
const {userModel}=require('./models/user.js')
require("dotenv").config();
const port = process.env.PORT;



// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.use(express.json()); 
app.use('/api/v1', require("./routes"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});