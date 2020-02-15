import React from 'react';

function Question({ question, answer }) {
  // If either question or answer is undefined, do not parse the section and leave it blank.
  return (
    <div className="jokes">
      <div className="jokes__question" style={{ display: !question && 'none' }}>
        <span className="title">Question:</span>
        <span className="content">{question}</span>
      </div>
      <div className="jokes__answer" style={{ display: !answer && 'none' }}>
        <span className="title">Answer:</span>
        <span className="content">{answer}</span>
      </div>
    </div>
  );
}

export default Question;
