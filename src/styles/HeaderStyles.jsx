import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinkList = styled.ul`
  flex-basis: 50%;
  padding: 3rem 0 0 8rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 4rem;
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
