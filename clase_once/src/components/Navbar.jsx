import { useContext } from "react"
import ThemeContext from "../context"
import "../App.css";

const Navbar = () => {

    const{theme, handleChangeTheme}= useContext(ThemeContext);

  return (
    <div>
        <p>Home</p>
        <button onClick={handleChangeTheme}
        style={{background:theme.background,color:theme.font}}
        >
            Cambiar Tema
        </button>
    </div>
  )
}

export default Navbar