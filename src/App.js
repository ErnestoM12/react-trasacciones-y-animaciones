import React, { useState } from 'react'
import './Animaciones.css'

const Header = ({ show }) => {


  const classes = show ? 'header header-active' : 'header'

  return (
    <header className={classes}>
      <h1>
        Transiciones CSS en linea
        <span role='img' aria-label='fire'>
          🔥
        </span>
      </h1>
    </header>
  )
}

const App = () => {
  const [active, setActive] = useState(false)

  const toggle = () => setActive(!active)

  return (
    <div>
      <button onClick={toggle}>
        {active ? 'Desactivar' : 'Activar'}
      </button>
      <Header show={active} />
    </div>
  )
}
export default App