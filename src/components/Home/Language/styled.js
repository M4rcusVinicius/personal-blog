import styled from "styled-components"
import { Link } from "gatsby"

export const SubjectLinksWrapper = styled.section`
  padding: 2rem 10rem 4rem;
  background-color: var(--back);
`

export const SubjectLinksList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
`

export const SubjectLinksItem = styled.li`
  --width: 12rem;
  --height: 13rem;

  width: var(--width);
  height: var(--height);
  position: relative;

  &:before, &:after {
    position: absolute;
    content: "";
    right: 0;
    top: 0;
    background: rgba(2,126,251,1);
    transition: all 0.3s ease;
  }

  &:before {
    height: 0%;
    width: 2px;
  }

  &:after {
    width: 0%;
    height: 2px;
  }

  &:hover{
    background: transparent;
    box-shadow: none;
  }
  &:hover:before {
    height: 2rem;
  }
  &:hover:after {
    width: 2rem;
  }
  &:active:hover:before {
    transition: all 0.06s ease;
    height: 100%;
  }
  &:active:hover:after {
    transition: all 0.06s ease;
    width: 100%;
  }
  
  & .link:before,
  & .link:after {
    position: absolute;
    content: "";
    left: 0;
    bottom: 0;
    background: rgba(2,126,251,1);
    transition: all 0.3s ease;
  }
  & .link:before {
    width: 2px;
    height: 0%;
  }
  & .link:after {
    width: 0%;
    height: 2px;
  }
  & .link:hover:before {
    height: 2rem;
  }
  & .link:hover:after {
    width: 2rem;
  }
  & .link:active:hover:before {
    transition: all 0.06s ease;
    height: 100%;
  }
  & .link:active:hover:after {
    transition: all 0.06s ease;
    width: 100%;
  }
`

export const SubjectLinksLink = styled(Link)`
  outline: none;
  text-align: center; 
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const SubjectLinksText = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 2rem;
  color: var(--text);
`

export const SubjectLinksIcon = styled.span`
  display: block;
  height: 5rem;
  width: 5rem;
  position: relative;
  margin: 0 auto; 
  color: #1AABFF;
`