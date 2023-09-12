import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import CounterProvider from './Context.jsx'
import Counter from './Counter.jsx'
import Display from './Display.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CounterProvider>
    <Counter/>
    <Display/>
  </CounterProvider>
)
