import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const uri =
  "mongodb+srv://SebasDevp:sebas@engineertool.jhfom.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(uri, options).then(
  () => {
    console.log("conectado a db");
  },
  (err) => {
    console.log(err);
  }
);

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "images")));

app.use(require("./routes/User"));
app.use(require("./routes/img"));
app.use(require("./routes/mensaje"));

app.set("puerto", process.env.PORT || 3000);

app.listen(app.get("puerto"), function () {
  console.log("app listening on por " + app.get("puerto"));
});
