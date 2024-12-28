import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Form from './components/Form'
import CharacterCard from './components/CharacterCard';
import Pagination from './components/Pagination';


function App() {

  const [characters, setCharacters] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);



  let url = `https://rickandmortyapi.com/api/character?page=${pageNumber}`
  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCharacters(data.results);
    }
    fetchCharacters();
  }, [pageNumber])
  return (
    <>
      <Header />
      <Navbar />
      <Form />
      <CharacterCard characters={characters} />
      <Pagination prevPage={pageNumber} setPageNumber={setPageNumber} />




    </>
  )
}

export default App
