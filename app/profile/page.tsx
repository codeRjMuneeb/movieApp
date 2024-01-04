import React from 'react'
import Profile from './profile'
import Nav from '../dashboard/nav/nav'

const page = () => {
  return (
    <div className='bg-gray-800'>
      <Nav/>
      <Profile/>
    </div>
  )
}

export default page
