import React from "react";

const ConceptList = ({ concepts, setFeaturedIndex, setShowDefinition, handleDeleteConcept }) => (
  <ul className="w-full max-w-xl p-4 bg-white rounded-lg shadow-lg list-none text-lg">
    <h3 className="font-semibold mb-2">List of Concepts</h3>
    <p className="text-gray-400 italic">Click to view a revision card!</p>
    {concepts.map((concept, index) => (
      <li
        key={concept.id}
        className="flex justify-between items-center p-4 text-lg font-semibold text-gray-700 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-300 mb-2 cursor-pointer"
        onClick={() => {
          setFeaturedIndex(index);
          setShowDefinition(false);
        }}
      >
        <span>{concept.name}</span>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent card click event from triggering
            handleDeleteConcept(concept.id);
          }}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ConceptList;
