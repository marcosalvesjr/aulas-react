const TemplateExpressions = () => {
    const name = "Marcos"
    const data = {
        age: 29,
        job: "programmer"
    }
    return (
        <>
            <h1>Olá {name}</h1>
            <p>Você tem {data.age} anos.</p>
            <p>Você atua como: {data.job}.</p>

        </>

    );

}

export default TemplateExpressions