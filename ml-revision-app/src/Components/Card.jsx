import React from "react";

const Card = ({ concept, showDefinition, toggleDefinition }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-3/4 mx-auto my-4 h-60">
      <h3 className="text-lg font-semibold">{concept.name}</h3>
      <button
        onClick={toggleDefinition}
        className="mt-2 text-blue-500 hover:text-blue-700"
      >
        {showDefinition ? "Hide Definition" : "Show Definition"}
      </button>
      {/* Scrollable section for the definition only with bottom padding */}
      <div className="mt-2 overflow-y-auto max-h-60 ">
        {showDefinition ? (
          <p className="text-gray-700">{concept.definition}</p>
        ) : (
          <p className="text-gray-400 italic">Definition hidden</p>
        )}
      </div>
    </div>
  );
};

export default Card;

