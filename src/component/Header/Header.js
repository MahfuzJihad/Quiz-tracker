import React from 'react';
import './Header.css';
import Logo from '../Header/tech.jpg';


const Header = () => {
    return (
        <div className='header'>
            <div>
                <img src={Logo} width="200" alt="" />
            </div>
            <div className='quiz-write'>
                <h2>Check your Tech Knowledge</h2>
                <p>Put your knowledge about all things technology to the test with our 15 question quiz and have some nerdy fun in the process. Good luck!</p>
            </div>
        </div>
    );
};

export default Header;