import React from 'react'
import '../App.css'

const header = () => {
  return (
    <>
   <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <p className="navbar-brand" style={{color: "white"}}><h1>Home</h1></p>
      </div>
        <ul className="nav navbar-nav navbar-right">
         
          <li id="home"><a href="/home">Connect</a></li>
          <li id="compose"><a href="/compose">Explore</a></li>
          <li id="contact"><a href="/contact">contact</a></li>
        </ul>
    </div>
  </nav>

    
    
    
    
    
    
    </>
  )
}

export default header