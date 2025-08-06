import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <header className='bg-gray-800 text-white p-4'>
      <nav className='flex justify-between items-center w-full px-10 py-4'> 
        <div>
          My Site
        </div>
        <div className='flex gap-10'>
          <Link href='/' className='text-white hover:text-gray-300'> Home</Link>
          <Link href='/CreateUser' className='text-white hover:text-gray-300'>Create User</Link>
          <Link href='/ClientMember' className='text-white hover:text-gray-300'> Client Member</Link>
          <Link href='/Member' className='text-white hover:text-gray-300'> Member</Link>
          <Link href='/Public' className='text-white hover:text-gray-300'>Public</Link>
           
        </div>
      </nav>
    </header>
  )
}

export default Nav
