// components
import FirstComponent from './components/FirstComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Challenge from './components/Challenge'
import Events from './components/Events'
// hook
import { useState } from 'react'
// styles
import './App.css'
import MyComponent from './components/MyCompenent'


function App() {
  const [value, setValue] = useState("")
  const handleChange = (e) => { setValue(e.target.value) }

  return (
    <>
      <h1>Hello World React</h1>
      <input placeholder="Digite seu nome"
        onChange={handleChange}
        type="text"
        value={value} />
      <p>Seja bem-vindo, {value}!</p>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <Challenge />
    </>
  )
}

export default App
