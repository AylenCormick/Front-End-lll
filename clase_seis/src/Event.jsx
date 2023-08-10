// eslint-disable-next-line react/prop-types
function Event({num}) {

    function miEvento() {
        console.log("Activado " + num);
    }

    return (
        <>
            <p> Click para ejecutar un evento</p>
            <button onClick={miEvento}>Activar</button>
        </>
    )
}

export default Event;