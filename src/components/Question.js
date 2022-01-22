import React, { useState, useEffect } from 'react';


function Question(props) {
  const [inputValue, setinputValue] = useState(props.question.type === "checkbox" ? [] : '');
  const [questions, setQuestions] = useState('');

  useEffect(() => {
    const questions = props.question?.dependedQuestions.find(dependedQuestion => dependedQuestion.answerId === inputValue)?.questions;
    if (questions) {
      setQuestions(questions)
    } else {
      setQuestions('')
    }
    props.question.answers = inputValue;
  }, [inputValue])

  const renderOptions = () => {
    if (props.question.type === "dropdown" || props.question.type === "radio") {
      return (
        <div>
          <h3>{props.question.question}</h3>
          <select value={inputValue} onChange={e => setinputValue(e.target.value)}>
            <option value={""} hidden>Select an option</option>
            {props.question.options.map(option => <option key={option._id} value={option.option}>{option.option}</option>)}
          </select>
        </div>
      );
    } else if (props.question.type === "textbox") {
      return (
        <input value={inputValue} onChange={e => setinputValue(e.target.value)} />
      );
    } else if (props.question.type === "checkbox") {
      return (         
              props.question.options.map(option => (
                <div key={option._id}>
                <label> {option.option} :
                <input                  
                  type="checkbox"
                  onChange={e => e.target.checked 
                    ? setinputValue([...inputValue, option.option]) 
                    : setinputValue([...inputValue.filter(element => element != option.option)])
                  }
                />
                </label>
                <br />
                </div>
              ))
      );
    } else if(props.question.type === "datepicker") {
      return (
        <input
          type="date"
          value={inputValue}
          onChange={e => setinputValue(e.target.value)}
        />
      )
    }
  };

  return (
    <div>
      {renderOptions()}
      {questions.length > 0 ? (questions.map(question => <Question key={question._id} question={question} />)) : null}
    </div>
  );
}

export default Question;
