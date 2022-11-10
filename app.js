require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());

const port = process.env.APP_PORT ?? 5000;

const welcome = (req, res) => {
  res.send("Welcome to users list");
};

app.get("/", welcome);

const userHandlers = require("./userHandlers");
const {validateUsers} = require("./validators.js")

app.get("/api/users", userHandlers.getUsers);
app.get("/api/users/:id", userHandlers.getUserById);
app.post("/api/users", validateUsers, userHandlers.postUsers);
app.put("/api/users/:id", validateUsers, userHandlers.updateUsers);
app.delete("/api/users/:id", userHandlers.deleteUsers);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});