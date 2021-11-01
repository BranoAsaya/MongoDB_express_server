const express = require("express");
const app = express();
const functions = require("./functions");
app.use(express.json());

app.get("/todos", (req, res) => {
  functions.findAll(req, res);
});

app.post("/todos", (req, res) => {
  functions.addTask(req, res);
});

app.get("/todos/:id", (req, res) => {
    functions.findTask(req, res);
  });

  app.delete("/todos/:id", (req, res) => {
  
    functions.deleteTask(req, res);
  });

  app.patch("/todos/:id", (req, res) => {

    functions.updateTask(req, res);
  });
app.listen(8080);
