//estilo
import './App.css'
//componentes
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditinalRender from './components/ConditinalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment from './components/Fragment'
import Container from './components/Container'
//imagens
import City from './assets/city.jpg'
import { useState } from 'react'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import UserDetails from './components/UserDetails'




function App() {

  const [userName] = useState("Marcos");
  const [brand] = useState("VW");
  const [km] = useState(100000);
  const [color] = useState("Branco");
  const [cars] = useState([
    { id: 1, brand: 'Ferrari', km: 0, color: "Vermelho", newCar: true },
    { id: 2, brand: 'Ford', km: 12213, color: "Prata", newCar: false },
    { id: 3, brand: 'GM', km: 0, color: "Azul", newCar: true },
    { id: 4, brand: 'RAM', km: 0, color: "Preto", newCar: true },
    { id: 5, brand: 'GM', km: 1232323, color: "Azul", newCar: false },
  ]);

  function showMessage() {
    console.log("Evento do componete pai!")
  };

  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  const [users] = useState([{
    id: 1, name: 'Marcos', age: 29, profession: 'programmer'
  },
  {
    id: 2, name: 'Daiane', age: 37, profession: 'programmer'
  },
  {
    id: 3, name: 'João', age: 17, profession: 'programmer'
  },
  ]);

  return (
    <>
      <h1>Avaçando em react</h1>
      {/* Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditinalRender />
      {/* Props */}
      <ShowUserName name={userName} />
      {/* Destructuring */}
      <CarDetails brand={brand} km={km} color={color} newCar={false} />
      {/* reaproveitamento */}
      <CarDetails brand="Ford" km="0" color="Vermelho" newCar={true} />
      <CarDetails brand="GM" km="120000" color="Cinza" newCar={false} />
      <CarDetails brand="FIAT" km="12000" color="Prata" newCar={false} />
      {/* renderização com loops */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} km={car.km} newCar={car.newCar} color={car.color} />
      ))}
      {/*Fragment*/}
      <Fragment propFragment="Teste" />
      {/* children */}
      <Container myValueTesting={200}>
        <p>Mais fácil do que pensei</p>
      </Container>
      <Container myValueTesting={9000}>
        <h4>Testando de forma diferente</h4>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
      {/* state lift */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/* desafio 4 */}
      {users.map((user) => (
        <UserDetails
          key={user.key}
          name={user.name}
          age={user.age}
          profession={user.profession} />
      ))}

    </>
  )
}

export default App
