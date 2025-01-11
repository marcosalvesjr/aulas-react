// 2-Links com react router dom
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            {/*<Link to="/">Home</Link>
            <Link to='/About'>About</Link>*/}
            {/* 8- Definir link ativo
            usamos no navbar <Link> utilizamos em algum link
            dentro da pagina desde que não seja no navbar */}
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>Sobre</NavLink>
        </nav>
    )
}

export default Navbar