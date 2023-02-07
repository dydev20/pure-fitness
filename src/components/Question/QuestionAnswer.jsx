import React from "react"
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai"

export default function QuestionAnswer(props){
    
    return(
        <div className="faq-container">
            <div className="question">
                <h2>{props.question}</h2>

                
                {props.showAnswer ? <AiOutlineMinus className="faq-icon" onClick={() => props.toggleFAQ(props.id)} size="1.2rem" />: <AiOutlinePlus className="faq-icon" onClick={() => props.toggleFAQ(props.id)} size="1.2rem"/>}
            </div>

            
            {props.showAnswer && <p className="answer">{props.answer}</p>}
            
        </div>
    )
}