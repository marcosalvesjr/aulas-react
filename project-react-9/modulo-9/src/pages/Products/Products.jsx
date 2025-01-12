import { useContext } from "react"
import { CounterContext } from "../../context/CounterContext"
import ChangeCounter from "../../components/ChangeCounter/ChangeCounter"

const Products = () => {
    const { counter } = useContext(CounterContext);

    return (
        <div>
            <h1>Produtos</h1>
            <p>Valor do contador: {counter} </p>
            {/* 3- alterar valor do context */}
            <ChangeCounter />
        </div>
    )
}

export default Products