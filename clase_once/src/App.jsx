import ThemeContext, {themes} from "./context";

import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import Body from "./components/Body";

import { useState } from "react";

function App(){

  const [theme,setTheme]=useState(themes.light);

  const handleChangeTheme = () => {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  };

    return(
      <div className="App">

        <ThemeContext.Provider value={{theme, handleChangeTheme}}>
          <Layout>
              <Navbar/>
              <Body/>
          </Layout>
        </ThemeContext.Provider> 
      </div>
    )


}

export default App;
