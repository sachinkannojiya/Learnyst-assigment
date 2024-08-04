import React from 'react';
import styles from './QuestionList.module.css';

function QuestionList({ questions }) {
  return (
    <div className={styles.container}>
      <h2>Saved Questions</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <p><strong>Question:</strong> {question.text}</p>
            <p><strong>Type:</strong> {question.type}</p>
            <p><strong>Answer:</strong> {question.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
