import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
//PAGES
import Home from './Home/Home'
import About from './About/About'

function App() {


  return (
    <div className='app'>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}

export default App
