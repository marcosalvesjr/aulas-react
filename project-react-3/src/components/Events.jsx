const Events = () => {
    const handleChange = (e) => {
        console.log(e)
        console.log("Ativou o evento")
    }
    return (
        <>
            <button onClick={handleChange}>Clique aqui</button>
            <button onClick={() => { console.log("Clicou!") }}>Clique aqui também</button>
        </>
    );
}

export default Events;