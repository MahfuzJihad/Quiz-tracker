import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Option from '../Options/Option';
import './QuizPage.css'


const QuizPage = ({ query }) => {
    const { question, id, correctAnswer } = query;

    const handleClick = (answer) => {
        if (answer === correctAnswer) {
            toast('Right Answer')
        }
        else {
            toast('Wrong!')
        }
    }
    const handleEye = () => {
        toast(correctAnswer)
    }

    return (
        <div className='question'>
            <div className='quiz-container'>
                <h3>Quiz: {question}</h3>
                <div className='font'>
                    <FontAwesomeIcon onClick={handleEye} icon={faEye}><ToastContainer /></FontAwesomeIcon>
                </div>
            </div>
            <div className='option'>
                {query.options.map((option, idx) =>
                    <Option key={idx}
                        id={id}
                        option={option}
                        handleClick={handleClick}></Option>
                )}
            </div>
        </div>
    );
};

export default QuizPage;