import React, { useState } from 'react';
import MCQInput from './components/MCQInput';
import FIBInput from './components/FIBInput';
import NumericInput from './components/NumericInput';
import QuestionList from './components/QuestionList';
import styles from './App.module.css';

function App() {
  const [questionType, setQuestionType] = useState('MCQ');
  const [questionText, setQuestionText] = useState('');
  const [answer, setAnswer] = useState('');
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');

  const validate = () => {
    if (!questionText.trim()) {
      setError('Question text is required.');
      return false;
    }
    if (questionType === 'MCQ' && !answer) {
      setError('You must select the correct answer for MCQ.');
      return false;
    }
    if (questionType === 'FIB' && !answer.trim()) {
      setError('Answer for FIB is required.');
      return false;
    }
    if (questionType === 'Numeric' && (answer === '' || isNaN(answer))) {
      setError('A valid numeric answer is required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSave = () => {
    if (validate()) {
      const newQuestion = {
        text: questionText,
        type: questionType,
        answer: answer,
      };
      setQuestions([...questions, newQuestion]);
      setQuestionText('');
      setAnswer('');
    }
  };

  const handleQuestionTypeChange = (e) => {
    setQuestionType(e.target.value);
  };

  return (
    <div className={styles.App}>
      <h1>Learnyst Question Builder</h1>
      {error && <p className={styles.error}>{error}</p>}
      <div>
        <label>Question Text: </label>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
      </div>
      <div>
        <label>Question Type: </label>
        <select value={questionType} onChange={handleQuestionTypeChange}>
          <option value="MCQ">MCQ</option>
          <option value="FIB">FIB</option>
          <option value="Numeric">Numeric</option>
        </select>
      </div>
      {questionType === 'MCQ' && <MCQInput setAnswer={setAnswer} />}
      {questionType === 'FIB' && <FIBInput setAnswer={setAnswer} />}
      {questionType === 'Numeric' && <NumericInput setAnswer={setAnswer} />}
      <button onClick={handleSave}>Save Question</button>
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
