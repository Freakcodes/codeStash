import Heading from '@/components/Heading'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (                                              
    <div className=''                                                                                                                                                                                                                                                                                                                                                                                                                                                     >
      {/* Header */}
      
      

        <main className=' container mt-2'>
            <Heading/>
            <Outlet/>
        </main>
        
        {/* Footer */}
    </div>
  )
}

export default Layout