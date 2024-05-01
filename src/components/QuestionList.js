import React,{useState,useEffect} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questionList, setQuestionList]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(res=>res.json())
    .then(data=>{
      setQuestionList(data)
    })
  
  },[])
 function handleDelete(id){
  fetch(`http://localhost:4000/questions/${id}`,{
    method: "DELETE", 
    headers:{
      'Content-type':'application/json'
    }

  })
  .then(res=>res.json())
  .then(()=>{
    const updatedQuestion = questionList.filter(question=> question.id !==id)
    setQuestionList(updatedQuestion)
  })

 }
 function handleChange(id,correctIndex){
  fetch(`http://localhost:4000/questions/${id}`,{
    method:'PATCH',
    headers:{
      "Content-Type": "application/json" 
    },
    body:JSON.stringify({correctIndex})
      })
    .then(res=>res.json())
    .then((updatedQuestions)=>{
    const updatedQuestion=questionList.map(question=>{
      if(question.id===updatedQuestions.id) return updatedQuestions;
      return question
    })
    setQuestionList(updatedQuestion)
    })
 }
  const question= ()=>{
    return  questionList.map(questionItem=>(
        <QuestionItem key={questionItem.id} question={questionItem} handleDelete={handleDelete} handleChange={handleChange}/>
    ))
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {question()}
        </ul>
    </section>
  );
}

export default QuestionList;
