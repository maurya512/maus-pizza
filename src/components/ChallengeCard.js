// card to display the challenges and events to be held at the restaurant
// import dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'

// Functional ChallengeCard
function ChallengeCard(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt="img src" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <p class="card-text">{props.prize}</p>
                        <p class="card-text">{props.time}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
// export the card
export default ChallengeCard