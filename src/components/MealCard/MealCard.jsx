import React, { useState } from 'react';
import ModalDetails from '../ModalDetails/ModalDetails';
import './MealCard.css';

const MealCard = (props) => {

  const handleAddToCart = props.handleAddToCart

// const [carHandler, setCartHandler] = useState([])

  const { strMeal, strMealThumb, price, strCategory,strArea , ratings} = props.meal
  // console.log(props)
  return (
    <div>
        <div className="card widthset"  >
          <img src={strMealThumb} className="card-img-top p-2 rounded-4" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Name : {strMeal}</h5>
            <p className="card-text fw-semibold">Price : {price}</p>
            <p className="card-text fw-semibold">Category : {strCategory}</p>
            <p className="card-text fw-semibold">Area : {strArea}</p>
            <p className="card-text fw-semibold">Ratings : {ratings}</p>
            
            <div className="btn-container ">
<ModalDetails modal={props.meal}></ModalDetails>
              <button onClick={()=>handleAddToCart(props.meal)} >Order Now</button>
            </div>
          </div>
        </div>
      


    </div>
  );
};

export default MealCard;