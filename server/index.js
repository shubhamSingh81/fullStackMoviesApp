require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.port || 5000;

app.use(cors());
app.use(express.json()); // -> allows us to access the req.body;

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err))

const routes  = require('./routes/moviesRoutes');
app.use(routes);

app.listen(PORT, ()=>{
    console.log(`server is connected successfully on ${PORT}`);
})
