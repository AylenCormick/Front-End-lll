function MensajeError({resp}) {
    if (resp) {
        return (
            <div className="error">
                <h5>Error en los datos ingresados: El nombre de la cancion debe tener mas de 3 caracteres y sin espacios al comienzo, y el nombre del autor debe tener mas de 6 caracteres.</h5>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}

export default MensajeError;