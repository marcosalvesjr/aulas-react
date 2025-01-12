//import { useContext } from "react"
//import { CounterContext } from "../../context/CounterContext"
import ChangeCounter from "../../components/ChangeCounter/ChangeCounter"
import { useCounterContext } from "../../hooks/useCounterContext"
import { useTitleColorContext } from "../../hooks/useTitleColorContext";

const Products = () => {
    //const { counter } = useContext(CounterContext);
    const { counter } = useCounterContext();
    const { color, dispatch } = useTitleColorContext();

    return (
        <div>
            <h1 style={{ color: color }}>Produtos</h1>
            <p>Valor do contador: {counter} </p>
            {/* 3- alterar valor do context */}
            <ChangeCounter />
        </div>
    )
}

export default Products