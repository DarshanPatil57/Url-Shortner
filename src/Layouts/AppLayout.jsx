
import { Header } from '@/Components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const Applayout = () => {
  return (
    <div>
        <main className='min-h-screen'>
            {/* Header */}
            <Header/> 
            {/* body */}
            <Outlet/>
        </main>
        {/* footer */}
        <div className='p-10 text-center bg-gray-800 mt-10'>
          Made with 💖
        </div>
    </div>
  )
}
