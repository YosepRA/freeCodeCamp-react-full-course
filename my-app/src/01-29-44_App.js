import React from 'react';
import Question from './components/01-29-44_Question';
import './01-29-44_main.css';

function App() {
  return (
    <div className="container">
      <Question question="How are you?" answer="I'm fine." />
      <Question question="How is the weather?" answer="I's about to rain." />
      <Question
        question="How was your night?"
        answer="I can't sleep because of my noisy siblings."
      />
    </div>
  );
}

export default App;
