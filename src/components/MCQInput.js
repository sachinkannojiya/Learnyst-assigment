import React, { useState, useEffect } from 'react';
import styles from './MCQInput.module.css';

function MCQInput({ setAnswer }) {
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [error, setError] = useState('');

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  useEffect(() => {
    if (!options.includes(correctAnswer)) {
      setCorrectAnswer('');
      setAnswer('');
    }
  }, [options, correctAnswer, setAnswer]);

  const handleCorrectAnswerChange = (e) => {
    setCorrectAnswer(e.target.value);
    setAnswer(e.target.value);
  };

  const allOptionsFilled = options.every(option => option.trim() !== '');

  return (
    <div className={styles.container}>
      <h3>MCQ Options</h3>
      {options.map((option, index) => (
        <div key={index} className={styles.option}>
          <label>Option {index + 1}: </label>
          <input
            type="text"
            value={option}
            onChange={(e) => handleOptionChange(index, e.target.value)}
          />
        </div>
      ))}
      <div>
        <label>Correct Answer: </label>
        <select
          value={correctAnswer}
          onChange={handleCorrectAnswerChange}
          disabled={!allOptionsFilled}
          className={!allOptionsFilled ? styles.disabled : ''}
        >
          <option value="">Select correct answer</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {!allOptionsFilled && <p className={styles.error}>*Please fill in all 4 options before selecting the correct answer.</p>}
    </div>
  );
}

export default MCQInput;
