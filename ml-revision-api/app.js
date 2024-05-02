// Node.js API for accessing the SQLite database
//
// To host locally:
// cd ./ml-revision-app/
// node app.js
//
// View Topics @ http://localhost:3001/api/topics
// View Concepts @ http://localhost:3001/api/concepts/:topicId e.g. http://localhost:3001/api/concepts/1

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Root path handler
app.get("/", (req, res) => {
  res.send("Server is running");
});

// Route for getting all topics
app.get("/api/topics", (req, res) => {
  db.all("SELECT * FROM topics", [], (err, rows) => {
    if (err) {
      res.status(400).json({ "error":err.message });
      return;
    }
    res.json(rows);
  });
});

// Route for getting concepts by topicId
app.get("/api/concepts/:topicId", (req, res) => {
  const { topicId } = req.params;
  db.all("SELECT * FROM concepts WHERE topicId = ?", [topicId], (err, rows) => {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json(rows);
  });
});

// Route for adding a new topic
app.post("/api/topics", (req, res) => {
  const { name } = req.body;
  db.run("INSERT INTO topics (name) VALUES (?)", [name], function(err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ "id": this.lastID });
  });
});

// Route for adding a new concept
app.post("/api/concepts", (req, res) => {
  const { topicId, name, definition } = req.body;
  db.run("INSERT INTO concepts (topicId, name, definition) VALUES (?, ?, ?)", [topicId, name, definition], function(err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ "id": this.lastID });
  });
});

// Route for deleting a topic by ID
app.delete("/api/topics/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM topics WHERE id = ?", [id], function(err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ "message": "Topic deleted successfully" });
  });
});

// Route for deleting a concept by ID
app.delete("/api/concepts/:id", (req, res) => {
  const { id } = req.params;
  db.run("DELETE FROM concepts WHERE id = ?", [id], function(err) {
    if (err) {
      res.status(400).json({ "error": err.message });
      return;
    }
    res.json({ "message": "Concept deleted successfully" });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
