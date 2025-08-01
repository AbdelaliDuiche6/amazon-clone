// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

// INIT
const app = express();
const PORT = 3000;
const DB =
  "mongodb+srv://Abdelali:xJjgjmtoyNiMS8Vf@cluster-1.byycnfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-1";

// MIDDLEWARE
app.use(authRouter);

// CONNECTIONS
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connected");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, () => {
  console.log(`connected at port ${PORT}`);
});
