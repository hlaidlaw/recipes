'use client'

import Link from 'next/link'
import React, { useState } from 'react'

export default function Nav({ title }) {
  const [isCollapsed, setCollapsed] = useState(true)

  function handleNavToggle() {
    setCollapsed(!isCollapsed)
  }

  return (
    <nav className='bg-gray-100 dark:bg-gray-800'>
      <div className='flex relative px-3 py-2'>
        <Link href='/'>
          <div className='grid items-center text-xl h-full pr-4'>
            <span className='font-bold'>Hannah&apos;s Recipes</span>
          </div>
        </Link>
        <div className='bg-gray-200 dark:bg-gray-700 rounded w-1'></div>
        <div className='self-center text-xl pl-4'>{title}</div>
        <div className='flex flex-row-reverse grow'>
          <button className='bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 rounded ml-2 px-2' type='button' onClick={handleNavToggle}>
            <svg className='fill-gray-400 dark:fill-gray-500 w-10 h-10' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'>
              <title>Navigation Menu</title>
              <g>
                <path d='M41,14H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,14Z' />
                <path d='M41,26H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,26Z' />
                <path d='M41,38H7a2,2,0,0,1,0-4H41A2,2,0,0,1,41,38Z' />
              </g>
            </svg>
          </button>
          <button className='ml-2' type='button'>
          </button>
          <ul className='hidden md:flex'>
            <li className='self-center p-2'></li>
          </ul>
        </div>
      </div>
      <div className={`absolute top-0${isCollapsed ? ' hidden ' : ' '}w-full h-screen z-40`} onClick={handleNavToggle} />
      <div className={`bg-gray-100 dark:bg-gray-800 border border-1 border-gray-300 dark:border-gray-600 absolute right-1 overflow-hidden${isCollapsed ? ' hidden ' : ' '}sm:rounded sm:shadow-sm w-screen sm:w-56 mt-1 z-50`}>
        <ul className='p-1'>
          <li>
            <Link href='/link'><span className='block hover:text-info w-full p-2'>Link</span></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
