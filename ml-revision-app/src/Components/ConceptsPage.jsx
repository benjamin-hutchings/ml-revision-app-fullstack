import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const ConceptsPage = ({ topicId }) => {
  const [concepts, setConcepts] = useState([]);
  const [topics, setTopics] = useState([]);
  const [currentTopic, setCurrentTopic] = useState("");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);

  useEffect(() => {
    // Fetch all topics
    fetch("http://localhost:3001/api/topics")
      .then((res) => res.json())
      .then((data) => {
        setTopics(data);
        const topic = data.find((t) => t.id === parseInt(topicId));
        if (topic) {
          setCurrentTopic(topic.name);
        }
      })
      .catch((err) => console.error("Error fetching topics:", err));

    // Fetch concepts for the given topicId
    fetch(`http://localhost:3001/api/concepts/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        setConcepts(data);
        if (data.length > 0) {
          setFeaturedIndex(0);
          setShowDefinition(false);
        }
      })
      .catch((error) => console.error("Error fetching concepts:", error));
  }, [topicId]);

  const nextConcept = () => {
    setFeaturedIndex((prevIndex) => {
      setShowDefinition(false);
      return (prevIndex + 1) % concepts.length;
    });
  };

  const previousConcept = () => {
    setFeaturedIndex((prevIndex) => {
      setShowDefinition(false);
      return prevIndex === 0 ? concepts.length - 1 : prevIndex - 1;
    });
  };

  const toggleDefinition = () => {
    setShowDefinition(!showDefinition);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-center mb-10">{currentTopic}</h2>
      <div className="w-full max-w-xl p-4 text-center mb-8">
        <div className="flex justify-center items-center relative">
          <button
            onClick={previousConcept}
            className="absolute left-0 ml-4 bg-gray-200 hover:bg-gray-300 rounded-full p-3 text-lg"
          >
            &lt;
          </button>
          {concepts.length > 0 && (
            <Card
              concept={concepts[featuredIndex]}
              showDefinition={showDefinition}
              toggleDefinition={toggleDefinition}
            />
          )}
          <button
            onClick={nextConcept}
            className="absolute right-0 mr-4 bg-gray-200 hover:bg-gray-300 rounded-full p-3 text-lg"
          >
            &gt;
          </button>
        </div>
      </div>
      <ul className="w-full max-w-xl p-4 bg-white rounded-lg shadow-lg list-none text-lg">
        <h3 className="font-semibold mb-2">List of Concepts</h3>
        <p className="text-gray-400 italic">Click to view a revision card!</p>
        {concepts.map((concept, index) => (
          <li
            key={concept.id}
            className="block w-full text-left p-4 text-lg font-semibold text-gray-700 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-300 mb-2 cursor-pointer"
            onClick={() => {
              setFeaturedIndex(index);
              setShowDefinition(false);
            }}
          >
            {concept.name}
          </li>
        ))}
      </ul>
      <Link
        to="/"
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Return Home
      </Link>
    </div>
  );
};

export default ConceptsPage;
