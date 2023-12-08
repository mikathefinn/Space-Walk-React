import React from 'react'
import { LinkList, Nav, NavLink } from '../styles/HeaderStyles'

const Header = () => {
  return (
    <header>
      <Nav>
        <LinkList>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/rovers'>Rovers</NavLink>
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
