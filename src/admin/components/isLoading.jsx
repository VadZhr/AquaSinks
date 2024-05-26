import React from 'react'
import loading from '../assets/loading.gif'

export default function isLoading() {
  return (
    <div style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <img src={loading} alt="" width={100}/>
    </div>
  )
}
