import React, { useState } from 'react'

const Sidebar = () => {

  const [isCollapsed, setIsCollapsed] = useState(true)
  return (
    <div className='d-flex w-100 h-100 '>
        <nav className={`sidebar d-flex flex-column flex-shrink-0 postion-fixed w-25 h-50 ${isCollapsed ? 'collapsed' : ''}`}>
            <button className='toggle-btn' onClick={() => {setIsCollapsed(!isCollapsed); console.log(isCollapsed)}}>

            </button>

        </nav>
    </div>
  )
}

export default Sidebar