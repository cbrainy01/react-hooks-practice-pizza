import React, { useState, useEffect } from "react";

import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  
  

  // do initial fetch here instead and pass pizza info down from here
  const [pizzas, setPizzas] = useState([])
  // fetch pizzas from server
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then( resp => resp.json() )
    .then( rData => { setPizzas(rData) } )
    .catch( err => console.log("error(s): ", err) )
  }, [])
  
  function handleSubmitOrder(orderData) {
    // create post request
    fetch("http://localhost:3001/pizzas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData)
    })
    .then( resp=> resp.json() )
    .then( newlyCreatedPizza => { setPizzas( [...pizzas, newlyCreatedPizza] ) } )
  }

  // create patch request 
  function handleEditOrder(pizzaInfo, pizzaId) {
    fetch(`http://localhost:3001/pizzas/${pizzaId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pizzaInfo)
    })
    .then(resp => resp.json())
    // map out pizzas but when ids match, return  the updated pizza instead
    .then( updatedPizza => { 
      const update = pizzas.map( (pizza) => {
        if(pizza.id === pizzaId) {return updatedPizza}
        else {return pizza}
      } )
      setPizzas(update)
    } )

  }
  return (
    <>
      <Header />
      <PizzaForm onSubmitOrder={handleSubmitOrder} />
      <PizzaList pizzas={pizzas} onEditOrder={handleEditOrder} />
    </>
  );
}

export default App;
