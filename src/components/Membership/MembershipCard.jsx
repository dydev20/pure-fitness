import React from "react"

export default function MembershipCard(props){

    function checkID(){
        if(props.membershipOption===props.id){
            return true
        }else{
            return false
        }
    }

    let style={
        backgroundColor: checkID() ? "#0c7946" :"white",
        color: checkID() ? "white" : "#333333"
    }

    return(
        <div className="card membership-card" onClick={()=>props.handleClick(props.id)} style={style}>
            <h2>{props.title}</h2>
            <h3 className="price">{props.price}</h3>
            <p>{props.description}</p>
                
        
        </div>
    )
}