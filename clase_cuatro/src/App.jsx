import style from './App.module.css'
import './App.css'

const songs = ["Best", "I know it wont work", "Full machine", "Where do we go now?", "I should hate you", "Will you cry?", "Amelie", "Difficult", "This is what the drugs are for", "Fault line", "The blue", "Right now"]

export default function App() {

  return (
    <>
        <img src="./assets/images.jpg" alt="" className={style.img} />

      <div className={style.cajagr}>
        <h1>Good Riddance</h1>
        <h2>By Gracie Abrams</h2>
      </div>
      <div>
          {songs.map((song, i) => (
            <li key={song}> { i+1 + ". " + song} </li>
          ))}
      </div>
    </>
  )
}

