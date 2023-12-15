import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkList = styled.ul`
  flex-basis: 50%;
  padding: 3rem 0 0 8rem;
  margin-bottom: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 4rem;

  .dropdown {
    position: relative;
    display: inline-block;
    padding-bottom: 0.5rem;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    min-width: 20rem;
    
    box-shadow: 0 0.8rem 1.6rem 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown-content:hover {
  display: block;
}

`
export const Nav = styled.nav`
  display: flex;
`
export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 2rem;
  font-size: medium;
  color: white;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 70%;
    height: 1px;
    bottom: -15%;
    left: 15%;
    background-color: white;
    opacity: 0;
    transition: opacity 1s ease;
  }

  &:hover {
    &:after {
      opacity: 1;
    }
  }
`
export const NavLinkDrop = styled(Link)`
  text-decoration: none;
  padding: 1rem;
  font-size: 2rem;
  color: white;
  position: relative;
  display: block;
`
