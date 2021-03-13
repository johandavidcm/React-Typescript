import { Counter } from "./components/Counter"
import { TimerPadre } from "./components/TimerPadre"
import { Usuario } from "./components/Usuario"

const App = () => {
  return (
    <>
      <h1>React + Typescript</h1>
      <hr/>
      <Counter/>
      <Usuario/>
      <h2>useEffet</h2>
      <hr/>
      <TimerPadre/>
    </>
  );
}

export default App;
