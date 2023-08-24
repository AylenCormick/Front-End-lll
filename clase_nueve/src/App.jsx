import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [title, setTitle] = useState("")
  const [autor, setAutor] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://openlibrary.org/search.json?q=the+lord+of+the+rings")
    .then((response) => response.json())
    .then((data) => {
      setTitle(data.docs[0].title);
      setAutor(data.docs[0].author_name)
      setLoading(false);
    })
    .catch((e) => console.log(e))
  }, [])

  return (
    <>
    <div className='App'>
      <h1>Perrito!</h1>
      {loading ? (
        <p>Cargando...</p>
      ):(
        <div className='App'>
          <p>{title}</p>
          <p>{autor}</p>
        </div>
      )}
    </div>
    </>
  )
}

export default App
