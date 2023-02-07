import React from "react"
import QuestionAnswer from "./QuestionAnswer"
import faqs from "../../data/questionAnswer"
import "./Question.css"

export default function FAQ(){

    const [questions,setQuestions]=React.useState(faqs)

    function toggleFAQ(id) {
       
        setQuestions(questions.map(question=>{
            if(question.id===id){
                
                return{...question, showAnswer: !question.showAnswer}
                
                
            }else{
                return question
            }
            
        }))

    }

    return(
        <div className="faq page-container">
            <h1 className="heading content-heading">Frequently Asked Questions</h1>
            {questions.map(question=>(
                <QuestionAnswer key={question.id} id={question.id} showAnswer={question.showAnswer} toggleFAQ={toggleFAQ} question={question.question} answer={question.answer}/>
            ))}

        </div>
    )
}