
function Turnos({pacientes}) {
    return (
        <>
        <h2>Turnos</h2>
        {pacientes.map((paciente, index) => (
            <div key={index} className="card">
                <p>Nombre: {paciente.nombre}, Apellido: {paciente.apellido}</p>
            </div>
        ))}
        </>
    )
}

export default Turnos;