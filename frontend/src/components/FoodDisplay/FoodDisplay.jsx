import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const { food_list } = useContext(StoreContext)

  return (
    <div className="food-display" id='food-display'> 
        <h2>Top disher near you</h2>
        <div className="food-display-list">
            {food_list.map((food, index) => {
                if(category === "All" || food.category === category){
                    return <FoodItem key={index} id={food._id} name={food.name} description={food.description} price={food.price} image={food.image} />
                }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay