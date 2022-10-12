import React from 'react';
import { ToastContainer } from 'react-toastify';


const Option = ({ option, handleClick, id }) => {
    console.log(option)


    return (
        <div className='box-quiz'>
            <div>
                <label>
                    <input onClick={() => handleClick(option)} type="radio" name={id} />{option} <ToastContainer position='top-center' />
                </label>
            </div>
        </div>
    );
};

export default Option;