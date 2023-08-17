import Item from "./Item";

// eslint-disable-next-line react/prop-types
function Lista({lista}) {
    return (
        <ul>
            {
                // eslint-disable-next-line react/prop-types
                lista.map(item => {
                    return (
                        <Item key={item} num={item}/>
                    )
                })
            }
        </ul>
    )
}

export default Lista;