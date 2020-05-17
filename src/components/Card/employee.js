import React from "react";
import "./style.css";

function Card(props) {
  return ( 
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeEmployee(props.id)} className="remove">
        Remove
      </span>
      
    </div>
  );
}

export default Card;