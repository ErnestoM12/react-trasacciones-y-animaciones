import React from 'react'
import Acoordion from './components/Acoordion'


const App = () => {
  return (
    <div>
      <Acoordion
        title={345353}
        content='otro texto un poco mas largo fdjkghjkdhfgjkgfkjhdgfkhkjdfghhdfgkldgfkjdgfkljdgj lkdfhgkjfgd'
        bgColor='purple'
      />

      <Acoordion
        title='mi titulo'
        content='otro texto un poco mas largo fdjkghjkdhfgjkgfkjhdgfkhkjdfghhdfgkldgfkjdgfkljdgj lkdfhgkjfgd'
        bgColor='orange'
      />



    </div>
  )
}
export default App
