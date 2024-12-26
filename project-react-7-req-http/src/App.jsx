import './App.css'
import { useState, useEffect } from "react"

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // 1-resgatando dados
  useEffect(() => {
    async function fetchProducts() {

      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  //2-add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product),
    });

    //3 - carregamento dinamico
    const addProduct = await res.json();

    setProducts((prevProducts) => [...prevProducts, addProduct]);

    //resetando os valores dos inputs
    setName("");
    setPrice("");
  };
  return (
    <>
      <h1>Lista de produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - R$ {product.price}</li>
        ))}
      </ul>
      <div className='add-product'>
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome: </span>
            <input name="name" value={name} type="text" onChange={(e) => { setName(e.target.value) }} />
          </label>
          <label>
            <span>Preço: </span>
            <input name="price" value={price} type="text" onChange={(e) => { setPrice(e.target.value) }} />
          </label>
          <input type="Submit" value="Criar" />
        </form>
      </div>
    </>
  )
}

export default App
