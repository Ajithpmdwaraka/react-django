import { useState } from "react"
import "./App.css"


function App() {
  const [books, setBooks] = useState([])
  return (
    <>
      <h1> Book Website</h1>
      <div>
        <input type="text" placeholder="Book title" />
        <input type="number" placeholder="Realease Date" />
        <button type="Submit">Add Book</button>
      </div>
    </>
  )
}

export default App