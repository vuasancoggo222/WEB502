import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
interface  Product {
  id : number,
  name : string,
}
function App() {
  const [count, setCount] = useState<number>(0)
 const [Products,setProducts] = useState<Product[]>([{id: 1, name:"Ha"},{id: 1, name:"Vu"},{id: 1, name:"Nam"},{id: 1, name:"Anh"}])
  return (
    <div className="App">
      <div>{Products.map(product=> <div>{product.name}</div>)}</div>
    </div>
  )
}

export default App
