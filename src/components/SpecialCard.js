// the card component to be used for the specials
// import dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'


// Functional Special Card Component
function SpecialCard(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt="card img" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text">{props.description}</p>
                        <p class="card-text">{props.price}</p>
                        <NavLink to='/contact' class="btn btn-danger">Take Me There</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

// export the card
export default SpecialCard