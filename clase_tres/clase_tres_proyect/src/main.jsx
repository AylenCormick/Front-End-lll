import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import Padre from './Padre.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Padre/>
    <Footer/>
  </React.StrictMode>,
)
