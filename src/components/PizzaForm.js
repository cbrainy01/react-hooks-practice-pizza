import React, { useState } from "react";

function PizzaForm({onSubmitOrder}) {
  
  const initialFormData = {
    topping: "",
    size: "Small",
    vegetarian: null,
  }
  const [formData, setFormData] = useState(initialFormData)
// setup function which changes state whenever 
  function handleChange(e) {
    // if e.target.name is vegetarian, we have to check value and then set its value in formData accordingly
    
    if(e.target.name === "vegetarian") 
    { e.target.value === "Vegetarian" ? setFormData( {...formData, vegetarian: true} ) : setFormData( {...formData, vegetarian: false} ) }
    else { setFormData( {...formData, [e.target.name]: e.target.value } ) }
  }

  function handleSubmit(e) {
    // carry out some checks with alerts
    e.preventDefault()
    if(formData.vegetarian === null) { alert(" must select 'vegetarian' or 'not vegetarian' ") }
    else { onSubmitOrder(formData); setFormData(initialFormData) }
    // pass formData into callback then reset form 
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            onChange={handleChange}
            value={formData.topping}
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
          />
        </div>
        <div className="col">
           
          <select onChange={handleChange} className="form-control" name="size"  value={formData.size}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              onChange={handleChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              onChange={handleChange}
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
