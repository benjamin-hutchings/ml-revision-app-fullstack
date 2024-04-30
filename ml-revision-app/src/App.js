import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './Components/Home';
import Card from './Components/Card';

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [concepts, setConcepts] = useState([]);

  const handleSelectedTopic = (topicId) => {
    setSelectedTopicId(topicId);
    console.log("Selected topic ID:", topicId); // Debugging output
    fetchConcepts(topicId);
  };

  // Fetch concepts for a selected topic
  const fetchConcepts = (topicId) => {
    fetch(`http://localhost:3001/api/concepts/${topicId}`)
      .then(response => response.json())
      .then(data => {
        setConcepts(data);
      })
      .catch(error => console.error('Error fetching concepts:', error));
  };

  return (
    <div className="App">
      <HomePage onSelectedTopic={handleSelectedTopic} />
      {concepts.map(concept => (
        <Card key={concept.id} concept={concept} />
      ))}
    </div>
  );
}

export default App;
