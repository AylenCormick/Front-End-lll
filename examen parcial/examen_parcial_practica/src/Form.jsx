import { useState } from 'react'

function Form({agregarCancion, mostrarMensajeError}) {

    const [nombreCancion, setNombreCancion] = useState("");
    const [nombreAutor, setNombreAutor] = useState("");
    const [nombreAlbum, setNombreAlbum] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if((nombreCancion.length > 2 && nombreCancion.trim() == nombreCancion) && nombreAutor.length > 5) {
            agregarCancion({nombreCancion, nombreAutor, nombreAlbum})
            setNombreCancion("");
            setNombreAutor("");
            setNombreAlbum("");
            mostrarMensajeError(false);
        } else {
            mostrarMensajeError(true);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre de cancion" onChange={(e) => setNombreCancion(e.target.value)} value={nombreCancion}/>
            <input type="text" placeholder="Nombre de autor" onChange={(e) => setNombreAutor(e.target.value)} value={nombreAutor}/>
            <input type="text" placeholder="Nombre de album" onChange={(e) => setNombreAlbum(e.target.value)} value={nombreAlbum}/>

            <button className='btn' type='submit'>Registrar cancion</button>
        </form>
    )
}

export default Form;