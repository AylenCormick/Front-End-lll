import './App.css'

function Hijo(props) {
    return (
        <div className='Hijo'>
            <h2>Producto: {props.producto}</h2>
            <h2>Precio: {props.precio}</h2>
        </div>
    )
}

export default Hijo;