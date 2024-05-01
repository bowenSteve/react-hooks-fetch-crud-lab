import React from "react";

function QuestionItem({ question, handleDelete,handleChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));
function logEvents(e){
  const  changedIndex=(e.target.value)
  handleChange(id, changedIndex)
}
  

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={logEvents}  defaultValue={correctIndex}>{options}</select>
      </label>
      <button  onClick={()=>handleDelete(id)} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;
