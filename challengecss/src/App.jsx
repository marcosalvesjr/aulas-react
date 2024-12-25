import { useState } from "react"
import CarDetails from "./components/CarDetails"

function App() {
  const [cars] = useState([
    { id: 1, brand: "GM", color: "Vermelho", km: 10000 },
    { id: 2, brand: "VW", color: "Preto", km: 10000 },
    { id: 3, brand: "FORD", color: "Amarelo", km: 10000 },
  ])

  return (
    <>
      <h1>Carros</h1>
      <div className="car-container">
        {cars.map((car) => (<CarDetails
          id={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km} />))}
      </div>


    </>
  )
}

export default App
