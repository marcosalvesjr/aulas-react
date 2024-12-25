import React, { useState } from 'react'

const Calculadora = () => {
    const [numberA, setNumberA] = useState();
    const [numberB, setNumberB] = useState();
    console.log(numberA, numberB)
    const [soma, setSoma] = useState();

    const Somar = (e) => {
        e.preventDefault();
        setSoma(parseInt(numberA) + parseInt(numberB))
        setNumberA('');
        setNumberB('');
    }

    return (
        <div>
            <form>
                <label>
                    <span>Primeiro número</span>
                    <input placeholder='Digite um número' value={numberA} onChange={(e) => { setNumberA(e.target.value) }} type="text" />

                </label>
                <label>
                    <span>Segundo número</span>
                    <input placeholder='Digite outro número' value={numberB} onChange={(e) => { setNumberB(e.target.value) }} type="text" />
                </label>
                <button onClick={Somar}>Somar</button>
            </form>
            <label>O resultado da soma é: {soma}</label>


        </div>
    )
}

export default Calculadora