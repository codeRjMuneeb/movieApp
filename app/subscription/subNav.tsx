import React from 'react'
import Link from 'next/link'
const subNav = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-10 py-3 ">
        <Link href="/dashboard"> <strong><h1 className='text-5xl text-black '>LOGO</h1></strong></Link>
       
        <Link href='/'>
        <h1 className='text-lg'>Sign in</h1>
        </Link>
      </div>
    </div>
  )
}

export default subNav
