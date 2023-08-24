import { useState, useEffect } from 'react'
import Pedido from './Pedido'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  useEffect(() => {
    console.log("El componente se actualizo");
  })

  useEffect(() => {
    console.log("El contador se incremento");
  }, [count])


  return (
    <>
    <h1>Su pedido</h1>
    <Pedido/>
    {/* <button onClick={()=>setCount(count+1)}>Incrementar</button> */}
    </>
  )
}

export default App
