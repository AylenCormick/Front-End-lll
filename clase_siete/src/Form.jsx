import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Form({onAgregarPaciente}) {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (nombre&&apellido) {
            onAgregarPaciente({nombre,apellido});
            setNombre("");
            setApellido("");
        } else {
            alert("Alguno de los datos esta incompleto")
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Ingrese su nombre:</p>
            <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            <p>Ingrese su apellido</p>
            <input type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)}/>

            <button type="submit">Crear paciente</button>
        </form>
    )
}

export default Form;