import React from 'react'
import { NavLink } from 'react-router-dom'
import web from '../images/app.jpg'


const Card = (props) => {
    return(
        <>
        <div className="col-md-4 col-10 mx-auto">
        <div className="card h-100">
            <img src={props.imgsrc} class="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title font-weight-bold">{props.title}</h5>
                 
                
            </div>
        </div>
        </div>
        </>
    )
}
export default Card