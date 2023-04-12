import "./styles.css"
import { useState } from "react"

export default function App(){
  // used js destructuring concept:
  const [newItem , setNewItem] = useState("")

  return (
    // <> this is a fragment used as inside one component only one element can get returned.
    <>
  <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input
       value={newItem}
      // onchange detects when the value of an input element changes. 
      // Value returns the value of the data at the cursor's current position.
       onChange = {e=>setNewItem(e.target.value)}
       type="text"
      id="item" 
      />
    </div>
    <button className="btn">Add</button>
  </form>
  <h1 className="header">ToDo List</h1>
  <ul className="list">
    <li>
      <label>
        <input type="checkbox" />
        Item 1
      </label>
        <button className="btn btn-danger">Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />
        Item 2
      </label>
        <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}