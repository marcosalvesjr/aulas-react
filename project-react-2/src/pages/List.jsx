import { Link } from "react-router-dom";
import { useState } from "react";




export function List() {
    const [value, setValue] = useState("");
    const [list, setList] = useState([]);

    const handleChange = (e) => { setValue(e.target.value) };

    const addList = () => {
        if (value.trim() !== "") {
            setList([...list, value]);
            setValue("");
        }
    }

    return (
        <>
            <h1>Lista</h1>
            <input
                value={value}
                onChange={handleChange}
                type="text"
                placeholder="Digite seu nome aqui" />
            <button onClick={addList}>Clique aqui</button>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <Link to={"/"}>Home</Link>
        </>
    );
}