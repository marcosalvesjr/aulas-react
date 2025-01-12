import ChangeCounter from "../../components/ChangeCounter/ChangeCounter";
//4- refatorando com hook
import { useCounterContext } from '../../hooks/useCounterContext'

const Home = () => {


  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - alterando valor context */}
      <ChangeCounter />
    </div>
  )
}

export default Home