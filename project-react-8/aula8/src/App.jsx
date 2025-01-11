//1-react router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
import Product from './pages/Product/Product'
import Info from './pages/Info/Info'
import NotFound from './pages/NotFound/NotFound'
import Search from './pages/Search/Search'
import SearchForm from './components/SearchForm/SearchForm'

function App() {

  return (
    <div className='App'>
      <h1>React Router</h1>
      <BrowserRouter>
        {/* // 2-Links com react router dom */}
        <Navbar />
        {/* 9 - search */}
        <SearchForm />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/*6-nested route */}
          <Route path='/products/:id/info' element={<Info />} />
          {/*4-rota dinamica */}
          <Route path='/products/:id' element={<Product />} />
          {/*9- search */}
          <Route path='/search' element={<Search />} />
          {/*7-no match route */}
          <Route path='*' element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
