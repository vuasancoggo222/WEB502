import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfo from './Components/ShowInfo'
import Item from "./Components/Item"
function App() {  
  const [products,setProducts] = useState([
    {id:1,name: "Vu"},
    {id:2,name: "Su"},
    {id:4,name: "Tu"},
  ])
  const removeItem = (id)=>{
  setProducts(products.filter(item=>item.id !== id))
  }
  const [count,setCount] = useState(0)
  return (
    <div className="App">
    <h1> Count : {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increase</button>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
  {products.map((item,index) => <div>{item.name} <button onClick={()=> removeItem(item.id)}>Remove</button></div> )}
    <ShowInfo name="Vu"/>
    </div>
  )
}

export default App
