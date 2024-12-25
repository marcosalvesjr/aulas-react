import { Link } from "react-router-dom";
import { useState } from "react";

export function Login() {

    //visualizar o valor, alterar valor
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);
    const handleChange = (e) => { setValue(e.target.value) };
    const addToList = () => {
        if (value.trim() !== "") {
            setList([...list, value]);// adiciona valor ao array lista
            setValue("");
        }
    }

    return (
        <>
            <h1>Login</h1>
            <input
                value={value}
                type="text"
                onChange={handleChange}
                placeholder="Digite seu nome" />
            <p>Seja bem-vindo {value}</p>
            <button onClick={addToList}>Adicionar a lista</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <Link to={"/"}>Home</Link>
        </>
    );
}