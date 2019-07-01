import React, { useState } from 'react'

import { MusicianHook } from './MusicianHook'
import 'bootstrap/dist/css/bootstrap.css'

export const App = () => {
  const [musicians, setMusicians] = useState([1])
  const [maxNumber, setMaxNumber] = useState(0)
  const [color, setColor] = useState('#000000')

  const add = () => {
    const max = maxNumber >= musicians.length + 1 ? maxNumber : musicians.length + 1
    setMusicians([...musicians, max])
    setMaxNumber(max + 1)
  }
  const remove = personId => {
    setMusicians([...musicians.filter(p => p !== personId)])
  }

  return (
    <div>
      <h2>App with Hooks</h2>
      <input type='color' onChange={e => setColor(e.target.value)} />
      <button onClick={() => add()}>+</button>
      <br />
      {musicians.map((personId, i) => {
        return (
          <div key={personId}>
            <MusicianHook recordNo={personId} color={color} />
            <button onClick={() => remove(personId)}> -</button>
          </div>
        )
      })}
    </div>
  )
}

export default App
