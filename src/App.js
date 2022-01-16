import React, { useState } from 'react'

const Header = ({ show }) => {

  const activeStyles = {
    background: '#3d1f9a',
    transform: 'scale(1)', //agregamos un transform
    color: '#000'
  }

  let headerStyles = {
    background: 'black',
    transform: 'scale(0)',//agregamos un transform
    position: 'absolute',
    textAlign: 'center',
    borderRadius: '.4em',
    color: 'orange',
    padding: '0.5em',
    margin: '0.5em',
    fontSize: '14px',
    transition: 'all 800ms ease', //agregamos transicion 
  }


  if (show) {
    headerStyles = {
      ...headerStyles,
      ...activeStyles
    }
  }

  return (
    <header style={headerStyles}>
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