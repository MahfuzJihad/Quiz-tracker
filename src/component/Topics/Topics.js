import React from 'react';
import { useLoaderData } from 'react-router-dom';


const Topics = () => {
    const topics = useLoaderData();
    console.log(topics);
    return (
        <div>
            <p>This is topic: {topics.length}</p>

        </div>
    );
};

export default Topics;