function MensajeError({resp}) {
    if (resp) {
        return (
            <div className="error">
                <h5>Error en los datos ingresados: El nombre de la cancion debe tener minimo 3 caracteres y sin espacios al comienzo, y el nombre del autor debe tener minimo 6 caracteres.</h5>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default MensajeError;