import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

const Search = () => {
    const [searchParams] = useSearchParams();

    const url = 'http://localhost:3000/products?' + searchParams;

    const { data: items, loading, error } = useFetch(url);

    return (
        <div>
            <h1>Resultados disponiveis</h1>
            {error && (<p>Ocorreu um erro.</p>)}
            {loading && (<p>Carregando...</p>)}
            <ul className='products'>
                {items && items.map((item) => (
                    <li key={item.id}>
                        <h1>{item.name}</h1>
                        <p>{item.price}</p>
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>))}
            </ul>

        </div>
    )
}

export default Search