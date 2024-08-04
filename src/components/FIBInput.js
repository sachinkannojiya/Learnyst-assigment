import React from 'react';
import styles from './FIBInput.module.css';

function FIBInput({ setAnswer }) {
  return (
    <div className={styles.container}>
      <h3>Fill in the Blank Answer</h3>
      <input
        type="text"
        onChange={(e) => setAnswer(e.target.value)}
      />
    </div>
  );
}

export default FIBInput;
