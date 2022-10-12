import React from 'react';
import { Link } from 'react-router-dom';
import './NabVar.css'

const NabVar = () => {
    return (
        <nav className='nab-var'>
            <p>Quiz Prime</p>
            <div className='nab-link'>
                <li><Link to='/' className='nab-topic'>Home</Link></li>
                <li><Link to='/topic' className='nab-topic'>Topics</Link></li>
                <li><Link to='/statistic' className='nab-topic'>Statistic</Link></li>
                <li><Link to='/blog' className='nab-topic'>Blog</Link></li>
            </div>
        </nav>
    );
};

export default NabVar;