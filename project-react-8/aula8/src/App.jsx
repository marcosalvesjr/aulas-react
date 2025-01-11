//1-react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Product from './pages/Product/Product'

function App() {

  return (
    <div className='App'>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* // 2-Links com react router dom */}
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/*4-rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
