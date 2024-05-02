import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import ConceptList from "./ConceptList";
import AddConceptForm from "./AddConceptForm";

const ConceptsPage = ({ topicId }) => {
  const [concepts, setConcepts] = useState([]);
  const [newConceptName, setNewConceptName] = useState("");
  const [newConceptDefinition, setNewConceptDefinition] = useState("");
  const [currentTopic, setCurrentTopic] = useState("");
  const [featuredIndex, setFeaturedIndex] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [showConceptControls, setShowConceptControls] = useState(false); // Updated to false

  useEffect(() => {
    // Fetch all topics
    fetch("http://localhost:3001/api/topics")
      .then((res) => res.json())
      .then((data) => {
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

  const handleNewConceptSubmit = () => {
    fetch("http://localhost:3001/api/concepts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        topicId: topicId,
        name: newConceptName,
        definition: newConceptDefinition,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setConcepts([
          ...concepts,
          {
            id: data.id,
            topicId: topicId,
            name: newConceptName,
            definition: newConceptDefinition,
          },
        ]);
        setNewConceptName("");
        setNewConceptDefinition("");
      })
      .catch((error) => console.error("Error adding new concept:", error));
  };

  const handleDeleteConcept = (conceptId) => {
    fetch(`http://localhost:3001/api/concepts/${conceptId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setConcepts(concepts.filter((concept) => concept.id !== conceptId));
          console.log(`Concept with ID ${conceptId} deleted successfully`);
        } else {
          console.error(`Failed to delete concept with ID ${conceptId}`);
        }
      })
      .catch((error) =>
        console.error(`Error deleting concept with ID ${conceptId}:`, error)
      );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold text-center mb-10">
        Viewing Revision cards for {currentTopic}
      </h2>
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
      <div className="flex">
        <button
          onClick={() => setShowConceptControls(!showConceptControls)}
          className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors duration-300 mb-5"
        >
          {showConceptControls ? "Hide Concepts" : "Show All Concepts"}
        </button>
      </div>
      <div classname="flex">
        {showConceptControls && (
          <>
            <ConceptList
              concepts={concepts}
              setFeaturedIndex={setFeaturedIndex}
              setShowDefinition={setShowDefinition}
              handleDeleteConcept={handleDeleteConcept}
            />
            <AddConceptForm
              newConceptName={newConceptName}
              newConceptDefinition={newConceptDefinition}
              setNewConceptName={setNewConceptName}
              setNewConceptDefinition={setNewConceptDefinition}
              handleNewConceptSubmit={handleNewConceptSubmit}
            />
          </>
        )}
      </div>

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
