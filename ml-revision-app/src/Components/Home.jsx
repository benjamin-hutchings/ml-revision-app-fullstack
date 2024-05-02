import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = ({ onSelectedTopic }) => {
  const [topics, setTopics] = useState([]);
  const [newTopicName, setNewTopicName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3001/api/topics")
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => console.error("Error fetching topics:", error));
  }, []);

  const selectTopic = (topicId) => {
    onSelectedTopic(topicId);
    navigate("/concepts");
  };

  const handleNewTopicSubmit = () => {
    // Check if the new topic name is empty
    if (!newTopicName.trim()) {
      // Show alert if the input field is empty
      alert("Please enter a topic name");
      return;
    }

    console.log("Submitting new topic:", newTopicName);
    fetch("http://localhost:3001/api/topics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: newTopicName }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New topic added:", data);
        // Add the new topic to the list of topics
        setTopics([...topics, { id: data.id, name: newTopicName }]);
        // Clear the input field
        setNewTopicName("");
      })
      .catch((error) => console.error("Error adding new topic:", error));
  };

  const handleDeleteTopic = (id) => {
    fetch(`http://localhost:3001/api/topics/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTopics(topics.filter((topic) => topic.id !== id));
          console.log(`Topic with ID ${id} deleted successfully`);
        } else {
          console.error(`Failed to delete topic with ID ${id}`);
        }
      })
      .catch((error) =>
        console.error(`Error deleting topic with ID ${id}:`, error)
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold text-center mb-10">Choose a Topic!</h2>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-4 text-center" style={{ maxHeight: "400px", overflowY: "auto" }}>
          <p className="text-gray-400 italic mb-2">Click to view revision cards</p>
          {topics.map((topic) => (
            <div
              key={topic.id}
              className="flex justify-between items-center mb-2"
            >
              <button
                onClick={() => selectTopic(topic.id)}
                className="block w-full text-left p-4 text-lg font-semibold text-gray-700 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-300"
              >
                {topic.name}
              </button>
              <button
                onClick={() => handleDeleteTopic(topic.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter new topic name"
              value={newTopicName}
              onChange={(e) => setNewTopicName(e.target.value)}
            />
          </div>
          <button
            onClick={handleNewTopicSubmit}
            className="block w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Add New Topic
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
