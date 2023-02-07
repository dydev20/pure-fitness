import React from "react"

export default function TrainerCard(props){
    
    return(
        <div className="card trainer-card">
            <img src={props.image} alt={props.image}/>
            <h2 className="name">{props.name}</h2>

            {props.showBiography ? <p className="biography">{props.biography}</p> : 
                <ul className="profile">
                    {props.profile.map(profileItem=>(
                        <li key={profileItem}>{profileItem}</li>
                    ))}
                </ul>
            }
            
            <div className="trainer-btn-container">

            
                {props.showBiography ? 
                    <button className="button green-btn trainer-btn" onClick={() => props.toggleBiography(props.id)}>View Profile</button> : 
                    <button className="button green-btn trainer-btn" onClick={() => props.toggleBiography(props.id)}>View Biography</button>
                }
            </div>

        </div>
    )
}