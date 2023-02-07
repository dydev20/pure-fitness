import React from "react"
import trainersData from "../../data/trainers"
import TrainerCard from "./TrainerCard"
import "./Trainers.css"


export default function Trainers(){

    const [trainers,setTrainers]=React.useState(trainersData)

    function toggleBiography(id){
        setTrainers(trainers.map(trainer => {
            if (trainer.id === id) {

                return { ...trainer, showBiography: !trainer.showBiography }


            } else {
                return trainer
            }

        }))
    }

    return(
        <div className="trainers green-page-container">
            <h1 className="heading white-heading content-heading">Personal Trainers</h1>
            <div className="cards-container">

            
                {trainers.map(trainer=>(
                    <TrainerCard 
                    key={trainer.id}
                    id={trainer.id}
                    image={trainer.image}
                    name={trainer.name}
                    profile={trainer.profile}
                    biography={trainer.biography}
                    showBiography={trainer.showBiography}
                    toggleBiography={toggleBiography}
                        />
                ))}
            </div>
        </div>
    )
}