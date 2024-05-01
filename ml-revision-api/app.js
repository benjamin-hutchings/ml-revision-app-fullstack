const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/api/topics", (req, res) => {
  db.all("SELECT * FROM topics", [], (err, rows) => {
    if (err) {
      res.status(400).json({ "error":err.message });
      return;
    }
    res.json(rows);
  });
});

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
