import ChangeCounter from "../../components/ChangeCounter/ChangeCounter";
//4- refatorando com hook
import { useCounterContext } from '../../hooks/useCounterContext'
//5 - context mais complexo
import { useTitleColorContext } from "../../hooks/useTitleColorContext";


const Home = () => {


  const { counter } = useCounterContext();

  //5- context mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor context */}
      <ChangeCounter />
    </div>
  )
}

export default Home