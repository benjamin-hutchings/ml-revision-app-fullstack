import React from 'react';

const Card = ({ concept }) => (
    <div className="card">
        <h3>{concept.name}</h3>
        <p>{concept.definition}</p>
    </div>
);

export default Card;