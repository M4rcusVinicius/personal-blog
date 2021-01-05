import styled from "styled-components"
import { Link } from "gatsby"

export const InfoWrapper = styled.section`
  padding: 4rem 10rem;
`

export const InfoList = styled.ul`
  display: flex;
  justify-content: space-around;
`

export const InfoItem = styled.li`
  width: 25%;
`

export const InfoLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  text-decoration: none;

  padding: 2rem;

  &:hover {
  }

`

export const InfoText = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 2.5rem;
  color: var(--text);
  text-align: center;
`

export const InfoDescription = styled.p`
  font-weight: 500;
  font-size: 1rem;
  margin-top: 1rem;
  color: var(--text);
  text-align: center;

`

export const InfoIcon = styled.span`
  display: block;
  height: 5rem;
  width: 5rem;
  position: relative;
  margin: 0 auto; 
  color: var(--icon);
`