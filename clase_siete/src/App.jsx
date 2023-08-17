import { useState } from 'react'
import Form from './Form'
import Turnos from './Turnos'
import './App.css'

function App() {

  const [pacientes, setPacientes] = useState([]);

  const addPaciente = (paciente) => {
    setPacientes([...pacientes, paciente]);
  }

  return (
    <>
    <div className='App'>
      <h1>Registro de pacientes</h1>
      <Form onAgregarPaciente={addPaciente}/>
      <Turnos pacientes={pacientes}/>
    </div>
    </>
  )
}

export default App
