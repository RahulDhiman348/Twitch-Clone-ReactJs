import React from 'react'
import { Avatar } from '@mui/material';
import './Header.css';

const Header = () => {
  return (
    <div className='header' >
        <div className='header-left'>
        <img className='header-left-logo'
         src="https://pngimg.com/uploads/twitch/twitch_PNG6.png"
         alt="twitch logo" />
         <h2>Following</h2>
         <h2>Browse</h2>
         <i className="fa-solid fa-ellipsis-vertical"></i>
         

        </div>
        <div className='header-center'>
        <input type='text' placeholder='Search' />
        <div className="header-centerLogoContainer">
        <i className="fas fa-search"></i>
        </div>

        </div>
        <div className='header-right'>
        <div className="header-rightContainer">
          <i className='fas fa-inbox'></i>
          <i className='fas fa-comment-alt'></i>

          <div className="header-rightBits">
            <i className='fas fa-gem'></i>
            <h4>Get Bits</h4>
          </div>

          <Avatar>S</Avatar>
        </div>

        </div>
    </div>
  )
}

export default Header