import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'



const MainLayout = () => {
    return (
        <div className='w-100'>
            <Header/>
            <div className='d-flex'>
                <Sidebar/>
                <Outlet/>
            </div>
    
            
        </div>
      )
}

export default MainLayout
