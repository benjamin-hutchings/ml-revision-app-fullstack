import React, { useEffect, useState } from 'react';

const HomePage = ({ onSelectedTopic }) => {
    // Initialize topics state as an empty array
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        // Fetch topics from the server
        fetch('http://localhost:3001/api/topics')
            .then(response => response.json())
            .then(data => setTopics(data))
            .catch(error => console.error('Error fetching topics:', error));
    }, []); // Empty dependency array means this effect runs once after the initial render

    return (
        <div>
            {topics.map(topic => (
                <button key={topic.id} onClick={() => onSelectedTopic(topic.id)}>
                    {topic.name}
                </button>
            ))}
        </div>
    );
};

export default HomePage;
