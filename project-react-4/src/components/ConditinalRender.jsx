import { useState } from "react"

const ConditinalRender = () => {
    const [x] = useState(false)
    const [name, setName] = useState("João")
    return (
        <div>
            <h2>Isso séra exibido?</h2>
            {x && <p>Se x for true sim</p>}
            {!x && <p>Se x for false, sim</p>}
            <h1>If ternário</h1>
            {name === "Marcos" ? (<div><p>o nome é Marcos</p></div>) : (<div><p>Usuário não encontrado</p></div>)}
            <button onClick={() => { setName("Marcos") }}>Set Name</button>
        </div>
    )
}

export default ConditinalRender