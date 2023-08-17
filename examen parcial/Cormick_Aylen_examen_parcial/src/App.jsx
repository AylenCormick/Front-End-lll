import { useState } from 'react'
import './App.css'
import Card from './Card';
import Form from './Form';
import MensajeError from './MensajeError';

function App() {
  const [canciones, setCanciones] = useState([]);

  const agregarCancion = (cancion) => {
    setCanciones([...canciones, cancion]);
  }

  const [respuesta, setRespuesta] = useState(false);

  const mostrarMensajeError = (resp) => {
    setRespuesta(resp);
  }

  return (
    <>
    <h1>Registro de canciones</h1>
    <div className='app'>
      <Form agregarCancion={agregarCancion} mostrarMensajeError={mostrarMensajeError}/>
      <MensajeError resp={respuesta}/>
      <h2>Listado de canciones</h2>
      <Card canciones={canciones}/>
    </div>
    </>
  )
}

export default App;