const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello from ML Revision API");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const topics = [
  { id: 1, name: "Machine Learning" },
  { id: 2, name: "Deep Learning" },
];

const concepts = [
  {
    id: 1,
    topicId: 1,
    name: "Supervised Learning",
    definition: "A type of machine learning...",
  },
  {
    id: 2,
    topicId: 1,
    name: "Unsupervised Learning",
    definition: "A type of machine learning...",
  },
  {
    id: 3,
    topicId: 2,
    name: "Neural Network",
    definition: "A deep learning concept...",
  },
  {
    id: 4,
    topicId: 2,
    name: "Backpropagation",
    definition: "A deep learning concept...",
  },
];

app.get("/api/topics", (req, res) => {
  res.json(topics);
});

app.get("/api/concepts/:topicId", (req, res) => {
  const { topicId } = req.params;
  const topicConcepts = concepts.filter(
    (concept) => concept.topicId.toString() === topicId
  );
  res.json(topicConcepts);
});
