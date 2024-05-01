import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Components/Home';
import ConceptsPage from './Components/ConceptsPage'; // Assume this will display concepts
import Footer from './Components/Footer';
import './App.css';

function App() {
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const handleSelectedTopic = (topicId) => {
    setSelectedTopicId(topicId);
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage onSelectedTopic={handleSelectedTopic} />} />
          <Route path="/concepts" element={<ConceptsPage topicId={selectedTopicId} />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
