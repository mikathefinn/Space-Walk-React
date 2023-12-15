import React from 'react'
import { useState } from 'react'
import { LinkList, Nav, NavLink, NavLinkDrop } from '../styles/HeaderStyles'

const Header = () => {
  
  return (
    <header>
      <Nav>
        <LinkList>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <div
              className='dropdown'>
            
              <NavLink to='/rovers'>Rovers</NavLink>

              <div className='dropdown-content'>
                <NavLinkDrop to='/Curiosity'>Curiosity</NavLinkDrop>
                <NavLinkDrop to='/Slideshow'>Images</NavLinkDrop>
              </div>
            </div>
          </li>
          <li>
            <NavLink to='/weather'>Weather</NavLink>
          </li>
          <li>
            <NavLink to='/facts'>Facts</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
        </LinkList>
      </Nav>
    </header>
  )
}

export default Header
