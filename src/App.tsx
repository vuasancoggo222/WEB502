import { useEffect, useState } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import ShowInfo from "./components/ShowInfo";
import type { ProductType } from "./types/product";
import {getAll,remove} from "./api/product"

const App = () => {
  const [products,setProducts] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios.get("http://localhost:5000/api/products");
      console.log(data);
      setProducts(data);
    };
    getProducts();
  },[]);
  const removeItem = async (id: number) => {
    const { data } = await remove(id);
    data && setProducts(products.filter(item => item._id !== data._id));
  }
  return (
    <div className="App">
      <table>
        <thead>
            <tr>
            <th>#</th>
            <th>Name</th>
            <th>Chức năng</th>
            </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td><button onClick={() => removeItem(item._id)}>Remove</button></td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
