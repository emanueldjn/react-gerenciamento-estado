import React from 'react'

import { UseState } from './UseState' // <-- CORRIGIDO (sem chaves)
import { ClassState } from './ClassState' // <-- Este está correto (com chaves)

import './App.css'

function App() {
  return (
    <div className='App'>
      <UseState name="UseState" />
      <ClassState  name="ClassState" />
    </div>
  )
}

export default App