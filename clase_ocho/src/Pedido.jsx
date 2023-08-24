import { useState, useEffect } from 'react'

export default function Pedido() {
    const [comida, setComida] = useState("")
    const [com, setCom] = useState("")

    useEffect(() => {
        console.log("El componente se monto");
        setTimeout(()=> {
            setComida("No hay comida ingresada");
        }, 2000)
    }, [])

    function handleClick() {
        setComida("");
        alert("Pedido cancelado");
    }    

    function handleSubmit(e) {
        e.preventDefault()
        setComida(com);
        setCom("");
    }

    function handleChange(e) {
        setCom(e.target.value);
    }

    return (
        <>
        <h2>{comida}</h2>
        <form action="submit" onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingresa lo que quieres cenar' onChange={handleChange} value={com}/>
        <button type='submit'>Enviar</button>
        </form>
        <button onClick={handleClick}>Eliminar</button>
        </>
    )
}