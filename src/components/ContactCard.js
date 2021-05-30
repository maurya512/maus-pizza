// the file where the contact card will be stated
// import dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'

// functional contact card component
function ContactCard(props) {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrc} class="card-img-top" alt="card img" />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text">{props.address}</p>
                        <p class="card-text">{props.phone}</p>
                        <NavLink to='/home' class="btn btn-success"></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

// export the card