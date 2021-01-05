import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  text-decoration: none;
  display: flex;


  body#grid & {
    flex-direction: column;
    justify-content: center;
  }
`

export const PostItemWrapper = styled.section`
  background-color: var(--back);
  border-radius: 8px;
  transition: 200ms;
  padding: 1rem;
  margin: 2rem 0;

  body#grid & {
    margin: 0;
  }

  &:hover {
    transform: translate(2px, -4px);
    box-shadow: -2px 4px 5px var(--shadow);
  }
`

export const PostItemInfo = styled.div`
  padding: 1.2rem 1.5rem 0 2.5rem;
  width: 70%;
  height: 100%;

  body#grid & {
    padding: 1.2rem;
    width: 100%;
    height: auto;
  }
`

export const PostItemDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;

  margin: 1rem 0;
  color: var(--textDescription);
  font-size: 1.1rem;
  font-weight: 500;

  body#grid & {
    font-size: 1rem;
  }
`

export const PostItemTitle = styled.h1`
  font-weight: 700;
  color: var(--textTitle);
  font-size: 1.8rem;
  text-align: ${(props) => (props.center ? 'center' : 'left')};

  body#grid & {
    font-size: 1.7em;
  }
`

export const PostItemInfoText = styled.h3`
  margin: 0.8rem 0;
  color: var(--textInfo);
  font-size: 1.15rem;
  font-weight: 600;

  body#grid & {
    font-size: 1.05rem;
  }
`
