import React from "react";

const AddConceptForm = ({ newConceptName, newConceptDefinition, setNewConceptName, setNewConceptDefinition, handleNewConceptSubmit }) => (
  <div className="w-full max-w-xl p-4">
    <h3 className="font-semibold mb-2">Add New Concept</h3>
    <input
      type="text"
      value={newConceptName}
      onChange={(e) => setNewConceptName(e.target.value)}
      placeholder="Concept Name"
      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
    />
    <textarea
      value={newConceptDefinition}
      onChange={(e) => setNewConceptDefinition(e.target.value)}
      placeholder="Concept Definition"
      className="w-full px-3 py-2 border border-gray-300 rounded-md mb-2"
      rows="4"
    />
    <button
      onClick={handleNewConceptSubmit}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
    >
      Add Concept
    </button>
  </div>
);

export default AddConceptForm;
