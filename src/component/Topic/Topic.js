import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({ topic }) => {
    const { id, logo, name, total } = topic;
    return (
        <div>
            <img src={logo} alt=""></img>
            <p>{name}</p>
            <p>Tota:{total}</p>
            <button> <Link to={`/quiz/${id}`}>Start practice</Link> </button>
        </div>
    );
};

export default Topic;