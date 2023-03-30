import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import MealCard from '../MealCard/MealCard';
import './Meal.css'
const Meal = () => {

    // use state for set meals 
const [meals, setMeals] = useState([])

// use state of set event handler
const [cart, setCart] = useState([])

// useEffect for load api data
useEffect(()=>{
    fetch('test.json')
    .then(res => res.json())
    .then(data => {
        setMeals(data.meals)
        // console.log(data.meals)
    })
        
},[])

// usEffect for get the data from local stroage
useEffect(()=>{
    const storedCart = getShoppingCart();
    const savedCart =[]
    // console.log(storedCart);
    // step-1 : get the id of storedCart
    for(const idMeal in storedCart){
        //  console.log(idMeal)
        //step-2: get meal from meals by using id
        const addedMeal = meals.find(meal => meal.idMeal === idMeal);
        if(addedMeal){
            //step-3: add quantity 
            const quantity = storedCart[idMeal];
            addedMeal.quantity = quantity;
            // step add the added meal to the saved cart
            savedCart.push(addedMeal)
        }
         console.log(addedMeal)
       
    }
    setCart(savedCart)

},[meals])


const handleAddToCart = meal =>{
    const newCart = [...cart, meal];
    setCart(newCart)
    // add your data in local storage
    addToDb(meal.idMeal)
    }

    return (
        <div className='own-style mt-5 ms-2'>
        <div className="ccd">
        {
   meals.map(meal => <MealCard
    meal={meal}
    handleAddToCart={handleAddToCart}

   ></MealCard> )
}
       
        </div>
        <div className='cart-container'>
<Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Meal;