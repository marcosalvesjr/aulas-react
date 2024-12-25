import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const [n] = useState(15);
  const [name] = useState("Marcos")
  const [redTitle] = useState(true)

  return (
    <>
      {/* CSS GLOBAL */}
      <h1>Olá React</h1>
      {/* CSS DO COMPONENTE */}
      <MyComponent />
      <p>Este é o paragrafo do App.jsx</p>
      {/* INLINE CSS */}
      <p style={{ color: "white", padding: "20px", borderTop: "2px solid red" }}>Este paragrafo é estilizado com css inline</p>
      {/* CSS INLINE DINAMICO */}
      <h2 style={n > 10 ? ({ backgroundColor: "green" }) : ({ backgroundColor: "red" })}>CSS dinamico</h2>
      <h2 style={n < 10 ? ({ backgroundColor: "green" }) : ({ backgroundColor: "red" })}>CSS dinamico</h2>
      <h2 style={name === "Marcos" ? ({ backgroundColor: "black", color: "red" }) : null}>Teste nome</h2>
      {/* CLASSE DINÂMICA */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>
      {/* CSS MODULES */}
      <Title />
    </>
  )
}

export default App
