const Challenge = () => {

    const a = 12;
    const b = 12;

    return (
        <>
            <p>O primeiro número tem o valor de {a}</p>
            <p>O segundo número tem o valor de {b}</p>
            <button onClick={()=>{console.log(a+b)}}>Clique aqui</button>
        </>

    )

}

export default Challenge