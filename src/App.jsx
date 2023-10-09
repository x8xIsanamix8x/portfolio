import React from 'react'
import { Sidenav } from './components/Sidenav'
import { Main } from './components/Main'
import { Work }  from './components/Work'
import { Projects } from './components/Projects'

export const App = () => {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      <Projects />
    </div>
  )
}

export default App