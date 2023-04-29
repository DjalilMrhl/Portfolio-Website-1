import React from 'react'
import './Pretitle.scss'

function Pretitle({h5,h1}) {
  return (
    <div className="pretitle text-align">
        <div className='pretitle--container'>
          <h5 className='text-light'>{h5}</h5>
          <h1>{h1}</h1>
        </div>
    </div>
  )
}

export default Pretitle;