import React from 'react';
import { Link } from 'react-router-dom';
import './Topic.css';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div className='topic-cart'>
            <img src={logo} alt=""></img>
            <p>{name}</p>
            <p>Tota:{total}</p>
            <button> <Link to={`/quiz/${id}`} className='topic-btn'>Start practice</Link> </button>
        </div>
    );
};

export default Topic;