const express = require("express");

const server = express();

server.post("/signup", (req, res) => {
  res.send("Welcome to the signup.... I used the post method");
});
server.put("/login", (req, res) => {
  res.send("Welcome to the login page... I used the put method");
});
server.patch("/logout", (req, res) => {
  res.send("Welcome to the logout page... I used the patch method");
});
server.delete("/profile", (req, res) => {
  res.send("Welcome to the profile page... I used the delete method");
});
server.use("/", (req, res) => {
  res.send("Hommie.... Welcome to the homepage");
});

server.listen(3000, "localhost", () => {
  console.log("server is good to go");
});
