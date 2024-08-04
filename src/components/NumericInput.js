import React, { useState } from 'react';
import styles from './NumericInput.module.css';

function NumericInput({ setAnswer }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === '' || /^[0-9]+$/.test(inputValue)) {
      setValue(inputValue);
      setAnswer(inputValue);
      setError('');
    } else {
      setError('Please enter a valid number.');
    }
  };

  return (
    <div className={styles.container}>
      <h3>Numeric Answer</h3>
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default NumericInput;
