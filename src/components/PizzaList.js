import React from "react";
import {v4 as uuid} from "uuid"
import Pizza from "./Pizza";

function PizzaList({pizzas, onEditOrder}) {
  

const renderPizzas = pizzas.map( (pizza) => <Pizza onEditOrder={onEditOrder} pizzaInfo={pizza} key={uuid()} /> )
  
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col" >Edit</th>
        </tr> 
      </thead>
      <tbody>
        { renderPizzas }
      </tbody>
    </table>
  );
}

export default PizzaList;
