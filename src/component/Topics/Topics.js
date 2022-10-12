import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topic from '../Topic/Topic';
import './Topics.css'


const Topics = () => {
    const topics = useLoaderData();
    console.log(topics);
    return (
        <div>
            <Header></Header>
            <div className='topic-container'>

                {
                    topics.data.map(topic => <Topic key={topic.id} topic={topic}> </Topic>)
                }
            </div>
        </div>
    );
};

export default Topics;