import React from 'react'
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";

function Root  () {
    return (
        <>
    <header>
        <div className='container'>
            <h1>News Circle</h1>
            <input className='searchbar' type="text" placeholder='Search here'/>
            <div>
            <nav>
            <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/about">About</Link>
            </li>
            <li>
            <Link to="/contact">News</Link>
            </li>
            </ul>
            </nav>
            </div>
            <span className="material-symbols-outlined">
            menu
            </span>
        </div>
        <div className='header2'>
            <div className='header-links'>
            <a href="#">Latest</a>
            <a href="#">World</a>
            <a href="#">Sports</a>
            <a href="#">Economy</a>
            </div>
            <button className='subscribe-btn'>Subscribe</button>
        </div>
        </header>
        
        <Outlet/>
  
      <footer>
        <div className='footer'>
       
      <img className='download-image' src="/public/download.png" alt="" />
      <div className='signin-section'>
      <span>Stay in touch with us</span>
      <input className='email-inputbox' type="text" placeholder='Enter your email address here' />
      <button className='footer-btn'>Sign In</button>
      </div>
        </div>
      </footer>
   
    

   
    
    </>
)
}

export default Root
