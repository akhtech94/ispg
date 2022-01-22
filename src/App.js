import React, { useEffect, useState } from 'react';

import Question from './components/Question';
import { questions } from './data';

import './App.css';

function App() {
  const [validated, setValidated] = useState(null);

  useEffect(() => {
    if(validated === true) console.log(questions);
  }, [validated]);

  const validate = questions => {
    return(questions.every(question => {
      if(!question?.answers?.toString()) return false;
      if(question.dependedQuestions.length > 0) {
        let dependedQuestion = question.dependedQuestions.find(dependedQuestion => dependedQuestion.answerId === question?.answers)
        if(dependedQuestion) return validate(dependedQuestion?.questions)
      }
      return true;
    }))
  };

  const renderMessage = () => {
    if(validated === null) return null;
    else if(validated === true) return (<h3>Success! Check console to see the output</h3>)
    else return (<h3>Sorry, all questions have to be answered to get the result.</h3>)
  };

  return (
    <div className="App">
      {questions.map(question => <Question key={question._id} question={question} />)}
      <button onClick={() => setValidated(validate(questions))}> Get Result </button>
      {renderMessage()}
    </div>
  );
}

export default App;
