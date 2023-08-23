import React from 'react'

const Header = ({title}) => {
  return (
    <div className='my-4'>
      <p className='capitalize text-gray-400 font-bold'>page</p>
      <h1 className='capitalize text-2xl font-bold'>{title}</h1>
    </div>
  )
}

export default Header