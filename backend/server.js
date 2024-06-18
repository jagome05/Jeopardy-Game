require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./DB/db.js")

//connects to local server host
const PORT = process.env.PORT;

//connects to db


//connects to controllers
// const messages = require("./controllers/message.js");
// const users = require("./controllers/users.js");
// const room = require("./controllers/room.js");
// const admin = require("./middleware/isAdmin");

app.use(cors());
// * lets us read json
app.use(express.json());

// connects to endpoints
// app.use("/api", messages);
// app.use("/users", users);
// app.use("/room", room);

//* use this to test admin privelge ---> app.use('/admin', admin)

app.listen(PORT, () => {
  console.log("listening on port: " + PORT);
  //todo is there a way to "listen" to db connection?
});
