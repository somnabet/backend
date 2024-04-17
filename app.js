const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

require("dotenv").config();

const mongoose = require("mongoose");
const mongoDB =
  "mongodb+srv://" +
  process.env.DB_USER +
  ":" +
  process.env.DB_PASSWORD +
  "@" +
  process.env.DB_SERVER +
  "/" +
  process.env.DB_NAME +
  "?retryWrites=true&w=majority";

async function main() {
  await mongoose.connect(mongoDB);
}

main().catch((err) => console.log(err));

const { taskRouter } = require("./routes/task.routes");

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`El usuario de la base de datos és`, process.env.DB_USER);
});
