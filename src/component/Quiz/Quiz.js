import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizPage from '../QuizPage/QuizPage';
import './Quiz.css'

const Quiz = () => {
    const quiz = useLoaderData();
    const { name } = quiz.data;
    console.log(quiz);

    const Boom = quiz.data.questions;
    return (
        <div>
            <h3 className='quiz-name'>Quiz of {name}</h3>

            <div>
                {
                    Boom.map(query => <QuizPage
                        key={query.id}
                        query={query}

                    ></QuizPage>)
                }
            </div>
        </div>
    );
};

export default Quiz;