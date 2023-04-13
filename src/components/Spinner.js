import React from 'react'
import loading from './Rhombus.gif'

const Spinner = () => {
    return (
      <div className='text-center' style={{margin: '30px'}}>
        <img src={loading} alt="loading" />
      </div>
    )
  }

export default Spinner;
