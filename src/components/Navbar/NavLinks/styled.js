import styled from "styled-components"
import { Link } from "gatsby"

export const NavLinksWrapper = styled.nav`
`

export const NavLinksList = styled.ul`
  display: flex;
`

export const NavLinksItem = styled.li`
  padding: 0 0.8rem;

  .active {
    color: var(--NavTextHover);
  }
`

export const NavLinksLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--NavText);
  position: relative;
  padding: 0.5rem 0.2rem;
  transition: color 400ms;

  &:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: var(--NavTextHover);
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }

  &:hover:after {
    width: 100%; 
    left: 0; 
  }

  &:hover {
    color: var(--NavTextHover);
  }

`