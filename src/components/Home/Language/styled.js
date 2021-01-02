import styled from "styled-components"
import { Link } from "gatsby"

export const SubjectLinksWrapper = styled.section`
  padding: 4rem 10rem;
  background-color: var(--back);
`

export const SubjectLinksList = styled.ul`
  display: grid;
  grid-area: home;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`

export const SubjectLinksItem = styled.li`
  visibility: visible;
  animation-duration: 1.2s;
  animation-delay: 0.4s;
  animation-name: fadeIn;
  background: transparent;
`

export const SubjectLinksLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-decoration: none;

  padding: 2rem;

  &:hover {
  }
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