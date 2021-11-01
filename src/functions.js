const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;
const url = "mongodb://localhost:27017/";
const DBname = "jsonplaceholder";
const collectionName = "todos";
let database, collection, object, params, body, update;

function findAll(req, res) {
  MongoClient.connect(url, (err, data) => {
    if (err) throw err;
    console.log("created");
    database = data.db(DBname);
    collection = collectionName;

    database
      .collection(collection)
      .find({})
      .toArray((err, docs) => {
        if (err) throw err;
        res.send(docs);
      });
  });
}

function addTask(req, res) {
  MongoClient.connect(url, (err, data) => {
    if (err) throw err;
    console.log("created");
    database = data.db(DBname);
    collection = collectionName;
    object = req.body;
    console.log(object);
    database.collection(collection).insertOne(object, (err, docs) => {
      if (err) throw err;
      res.send(docs);
    });
  });
}

function findTask(req, res) {
  MongoClient.connect(url, (err, data) => {
    if (err) throw err;
    console.log("created");
    database = data.db(DBname);
    collection = collectionName;

    params = req.params.id;
    object = { id: Number(params) };
    console.log(object);

    database
      .collection(collection)
      .find(object)
      .toArray((err, docs) => {
        if (err) throw err;
        res.send(docs);
      });
  });
}
function deleteTask(req, res) {
  MongoClient.connect(url, (err, data) => {
    if (err) throw err;
    console.log("created");
    database = data.db(DBname);
    collection = collectionName;

    params = req.params.id;
    object = { id: Number(params) };
    console.log(object);

    database.collection(collection).deleteOne(object, (err, docs) => {
      if (err) throw err;
      res.send(docs);
    });
  });
}

function updateTask(req, res) {
  MongoClient.connect(url, (err, data) => {
    if (err) throw err;
    console.log("created");
    database = data.db(DBname);
    collection = collectionName;
    body = req.body;
    params = req.params.id;
    object = { id: Number(params) };
    update = {
      $set: {
        userId: body.userId,
        id: body.id,
        title: body.title,
        completed: body.completed,
      },
    };

    database.collection(collection).updateOne(object, update, (err, docs) => {
      if (err) throw err;
      res.send(docs);
    });
  });
}

module.exports = { findAll, addTask, findTask, deleteTask ,updateTask};
