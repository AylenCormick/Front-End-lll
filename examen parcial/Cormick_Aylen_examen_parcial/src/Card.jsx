function Card({canciones}) {
    return (
        <>
        {canciones.map((c, i) => (
            <div className="card" key={i}>
                <h4>{c.nombreCancion}</h4>
                <h5>{c.nombreAutor}</h5>
                <h5>{c.nombreAlbum}</h5>
            </div>
        ))}
        </>
    )
}

export default Card;