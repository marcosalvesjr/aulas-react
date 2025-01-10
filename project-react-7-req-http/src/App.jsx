import './App.css'
import { useState, useEffect } from "react"

//4 - custom hook
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([]);

  //4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url)




  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // 1-resgatando dados
  // useEffect(() => {
  //    async function fetchProducts() {
  //
  //      const res = await fetch(url);
  //      const data = await res.json();
  //      setProducts(data);
  //    }
  //    fetchProducts();
  //  }, []);

  //2-add de produtos
  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price
    };

    //const res = await fetch(url, {
    //  method: "POST",
    //  headers: {
    //    "Content-Type": "application/json"
    //  },
    //  body: JSON.stringify(product),
    //});

    //3 - carregamento dinamico
    //const addProduct = await res.json();

    //setProducts((prevProducts) => [...prevProducts, addProduct]);

    //5 refatorando post

    httpConfig(product, "POST")

    //resetando os valores dos inputs
    setName("");
    setPrice("");
  };

  //8-desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  }



  return (
    <>
      <h1>Lista de produtos</h1>
      {/* 6 - loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!loading &&
        <ul>
          {items && items.map((product) => (
            <li key=
              {product.id}>{product.name} - R$ {product.price}
              <button onClick={() => handleRemove(product.id)}>Deletar</button>
            </li>
          ))}

        </ul>}

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
          {/* 7 - state do loading no post */}
          {loading && <input disabled type="submit" value="Aguarde" />}
          {!loading && <input type="submit" value="Criar" />}

        </form>
      </div>
    </>
  )
}

export default App
