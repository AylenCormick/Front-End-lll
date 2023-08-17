import { useState } from 'react'
import Lista from './Lista.jsx'
import './App.css'


function App() {

  const [lista, setLista] = useState([]);

  const [count, setCount] = useState(0)

  const handlerCount = () => {
    setCount((count) => count + 1)
    console.log(count);
    setLista([...lista, count])
    console.log(lista);
  }


  return (
    <>
      <h1>Clase 5</h1>
      <div className="card">
        <button onClick={() => handlerCount()}>
          Actualiza la lista
        </button>
        <div>
        <Lista lista={lista}/>
        </div>
      </div>
    </>
  )
}

export default App
