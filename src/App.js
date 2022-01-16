import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './App.css'

const App = () => {

  const [clicks, setClicks] = useState(0)


  const increment = () => setClicks(clicks + 1)
  const decrement = () => setClicks(clicks - 1)


  return (
    <div>
      <button onClick={increment}>
        +
      </button>
      <button onClick={decrement}>
        -
      </button>
      <div className='box'>
        <TransitionGroup>
          <CSSTransition
            timeout={1300}
            classNames='fade'
            key={clicks}
          >
            <div>
              {clicks}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>

    </div>
  )
}

export default App