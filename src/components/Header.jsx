import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  display: flex;
`
const LinkList = styled.ul`
  flex-basis: 50%;
  padding: 6rem 0 0 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 4rem;
`

const Header = () => {
  return (
    <header>
      <Nav>
        <LinkList className='link-ul'>
          <li>
            <Link className='navlink' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='navlink' to='/rovers'>
              Rovers
            </Link>
          </li>
          <li>
            <Link className='navlink' to='/weather'>
              Weather
            </Link>
          </li>
          <li>
            <Link className='navlink' to='/facts'>
              Facts
            </Link>
          </li>
          <li>
            <Link className='navlink' to='/about'>
              About
            </Link>
          </li>
        </LinkList>
      </Nav>
    </header>
  )
}

export default Header
