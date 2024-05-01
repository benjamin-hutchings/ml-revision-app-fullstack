import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = ({ onSelectedTopic }) => {
    const [topics, setTopics] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:3001/api/topics')
            .then(response => response.json())
            .then(data => setTopics(data))
            .catch(error => console.error('Error fetching topics:', error));
    }, []);

    const selectTopic = (topicId) => {
        onSelectedTopic(topicId);
        navigate('/concepts');
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h2 className="text-2xl font-bold text-center mb-10">Choose a Topic!</h2>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-4 text-center"> {/* Added text-center class here */}
                    {topics.map(topic => (
                        <button
                            key={topic.id}
                            onClick={() => selectTopic(topic.id)}
                            className="block w-full text-left p-4 text-lg font-semibold text-gray-700 hover:bg-blue-500 hover:text-white rounded-md transition-colors duration-300 mb-2"
                        >
                            {topic.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;
