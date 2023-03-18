import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';

import React from 'react'

const SidebarMain = () => {
    const { collapseSidebar } = useProSidebar();
  return (
    

    
      <div className='min-h-screen'>
        <Sidebar>
          <Menu>
            <MenuItem> Documentation</MenuItem>
            <MenuItem> Calendar</MenuItem>
            <MenuItem> E-commerce</MenuItem>
          </Menu>
        </Sidebar>
        <main>
          <button onClick={() => collapseSidebar()}>click to collapse</button>
        </main>
      </div>
    );
  
}

export default SidebarMain
  
