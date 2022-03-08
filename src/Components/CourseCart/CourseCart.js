import React from "react";
import "./CourseCart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

const CourseCart = (props) => {
  const { name, price, image } = props.detail;
  const handle = props.handle;

  return (
    <div className="container">
      <div>
        <div className="course">
          <img src={image} alt="/img" />
          <h3>Course: {name}</h3>
          <p>Price:$ {price}</p>
          <p>
            <span><small>4.5 </small><FontAwesomeIcon icon= {faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStar}/></span>
            <span><FontAwesomeIcon icon={faStarHalfStroke}/></span>
           </p>
          <button onClick= { () => handle(props.detail)} >Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default CourseCart;
