import { Footer } from './components/Footer'
import { AppRoutes } from './routes'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {


  return (
    <BrowserRouter>
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
