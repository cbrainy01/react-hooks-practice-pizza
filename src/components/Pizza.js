import React, {useState} from "react";


function Pizza({pizzaInfo, onEditOrder}) {
  
  const initialUpdateForm = {
    topping: pizzaInfo.topping,
    size: pizzaInfo.size,
    vegetarian: "",
  }
const [editing, setEditing] = useState(false)
const [updateForm, setUpdateForm] = useState(initialUpdateForm)

  function handleChange(e) {
    setUpdateForm({...updateForm, [e.target.name]: e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    if(updateForm.vegetarian !== "Yes" && updateForm.vegetarian !== "No") { alert("Must specify if pizza is vegetarian or not"); return }
    
    if(updateForm.size !== "Small" && updateForm.size !== "Medium" && updateForm.size !== "Large") { alert("Must specify pizza size to be either 'Small', 'Medium', or 'Large' "); return }
    let finalUpdateForm
    updateForm.vegetarian === "Yes" ? finalUpdateForm = {...updateForm, vegetarian: true} : finalUpdateForm = {...updateForm, vegetarian: false} 
    onEditOrder(updateForm, pizzaInfo.id)
    setEditing(false)
    setUpdateForm(initialUpdateForm)
  }
  
  return (
    // create a tertiary for when edit is being made and when not being made.
    
    <tr>
      {
      editing ?
      <>
        <td><input onChange={handleChange} value={updateForm.topping} name="topping" placeholder="topping"/></td>
        <td><input onChange={handleChange} value={updateForm.size} name="size" placeholder="size"/></td>
        <td><input onChange={handleChange} value={updateForm.vegetarian} name="vegetarian" placeholder="vegetarian"/></td>
        <button className="btn btn-primary" onClick={handleSubmit} >Save changes</button>
        <button className="btn btn-primary" onClick={() => setEditing(false) }>Cancel</button>
      </>
      :
      <>
        <td>{pizzaInfo.topping}</td>
        <td>{pizzaInfo.size}</td>
        <td>{pizzaInfo.vegetarian ? "Yes" : "No"}</td>
        <td>
          <button onClick={() => setEditing(true) } type="button" className="btn btn-primary">
            Edit Pizza
          </button>
        </td>
      </>
    }
      
    </tr>
    
    
  );
}

export default Pizza;
