import ChangeCounter from "../../components/ChangeCounter/ChangeCounter";
//4- refatorando com hook
import { useCounterContext } from '../../hooks/useCounterContext'
//5 - context mais complexo
import { useTitleColorContext } from "../../hooks/useTitleColorContext";


const Home = () => {


  const { counter } = useCounterContext();

  //5- context mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6- alterando context complexo
  const setTitleColor = (color) => {
    dispatch({ type: color })
  }
  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor context */}
      <ChangeCounter />
      <div>
        {/* 6- alterando context complexo */}
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
      </div>
    </div>
  )
}

export default Home