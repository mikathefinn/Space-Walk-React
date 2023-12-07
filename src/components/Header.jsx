import React from 'react'
import { Link } from 'react-router-dom'
import {LinkList, Nav, NavLink} from '../styles/HeaderStyles'

const Header = () => {
  return (
    <header>
      <Nav>
        <LinkList className='link-ul'>
          <li>
            <NavLink className='navlink' to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='navlink' to='/rovers'>
              Rovers
            </NavLink>
          </li>
          <li>
            <NavLink className='navlink' to='/weather'>
              Weather
            </NavLink>
          </li>
          <li>
            <NavLink className='navlink' to='/facts'>
              Facts
            </NavLink>
          </li>
          <li>
            <NavLink className='navlink' to='/about'>
              About
            </NavLink>
          </li>
        </LinkList>
      </Nav>
    </header>
  )
}

export default Header
