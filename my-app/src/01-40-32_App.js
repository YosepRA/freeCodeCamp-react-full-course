import React from 'react';
import Question from './components/01-40-32_Question';
import questionData from './01-40-32_questionData';
import './01-29-44_main.css';

function App() {
  const questionComponents = questionData.map(({ id, question, answer }) => (
    <Question question={question} answer={answer} key={id} />
  ));

  return <div className="container">{questionComponents}</div>;
}

export default App;
