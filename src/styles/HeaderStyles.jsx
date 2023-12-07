import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const LinkList = styled.ul`
flex-basis: 50%;
padding: 6rem 0 0 8rem;
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
  letter-spacing: 0.1rem;
  font-size: medium;
  color: white;

`