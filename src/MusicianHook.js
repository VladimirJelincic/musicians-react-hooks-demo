import React, { useState, useEffect } from 'react'

export const MusicianHook = ({ color, recordNo }) => {
  const [name, setName] = useState('')
  const [instrument, setInstrument] = useState('')
  const [oldColor, setOldColor] = useState(color)

  useEffect(() => {
    return () => console.log('Bye #', recordNo)
  }, [])
  useEffect(() => {
    if (color !== oldColor) {
      console.log(`Color changed from ${oldColor} to ${color}`)
      setOldColor(color)
    }
  }, [color])

  return (
    <div className='form border border-primary  ' style={{ padding: '5px' }}>
      <div style={{ textAlign: 'right', fontStyle: 'bold' }}>{recordNo}</div>
      <div className='form-group row'>
        <label htmlFor='name' className='col-lg-4 col-md-4 col-sm-4'>
          Name
        </label>
        <input
          id='name'
          className='form-control col-lg-7 col-md-7 col-sm-7  '
          onChange={e => setName(e.target.value)}
          style={{ color }}
          value={name}
        />
      </div>
      <div className='form-group row'>
        <label htmlFor='instrument' className='col-lg-4 col-md-4 col-sm-4'>
          Instrument
        </label>
        <select
          id='instrument'
          className='form-control col-lg-7 col-md-7 col-sm-7'
          onChange={e => setInstrument(e.target.value)}
          style={{ color }}
          value={instrument}
        >
          <option value='guitar'>🎸 Guitar</option>
          <option value='bass'>🎸 Bass </option>
          <option value='drums'>🥁 Drums </option>
          <option value='vocals'>🎤 Vocals </option>
        </select>
      </div>
    </div>
  )
}
