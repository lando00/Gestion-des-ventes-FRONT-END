import React from 'react';
import './InputForm.css';

const InputForm = ({label, value}) => {
  return (
    <div className='input-form'>
        <label>{label}</label>
        <input type="text" name="" id="" value={value} />
    </div>
  )
}

export default InputForm