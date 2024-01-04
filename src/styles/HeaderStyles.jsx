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
    font-size: medium;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    min-width: 10rem;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0.8rem 0 1rem 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown-content:hover {
    display: block;
  }
  .dropdown-submenu {
    position: relative;
  }
  .dropdown-submenu-content {
    background-color: rgba(0, 0, 0, 0.2);
    display: none;
    position: absolute;
    padding: 1rem 0.5rem 1rem 1rem;
    top: -1rem;
    left: 100%;
    box-shadow: 0.8rem 0 1rem 0 rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  .dropdown-submenu:hover .dropdown-submenu-content {
    display: block;
  }
`
export const Nav = styled.nav`
  display: flex;
`
export const NavLink = styled(Link)`
  text-decoration: none;
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
  font-size: 1.6rem;
  color: white;
  position: relative;
  display: block;
`
