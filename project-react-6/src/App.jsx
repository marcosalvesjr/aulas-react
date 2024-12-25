import './App.css'
import Calculadora from './components/Calculadora'
import MyForm from './components/MyForm'

function App() {


  return (
    <>
      <h1>Forms</h1>
      <MyForm user={{ name: 'Josias', email: 'josias@email.com', bio: 'Sou um advogado', role: 'admin' }} />
      <Calculadora />
    </>
  )
}

export default App
