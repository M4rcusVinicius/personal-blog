import styled from "styled-components"
import { Link } from "gatsby"

export const PostItemLink = styled(Link)`
  text-decoration: none;


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

  &:hover {
    translate: 2px -4px;
    box-shadow: -2px 4px 5px var(--shadow);
  }
  
  body#grid & {
    flex-direction: column;
    justify-content: center;
  }
`

export const PostItemInfo = styled.div`
  padding: 1.2rem;
`

export const PostItemDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;

  margin: 1rem 0;
  color: var(--textSoft);
  font-size: 1rem;
  font-weight: 500;
`

export const PostItemTitle = styled.h1`
  font-weight: 700;
  color: var(--text);
  font-size: 1.7rem;
  text-align: ${(props) => (props.center ? 'center' : 'left')};
`

export const PostItemInfoText = styled.h3`
  margin: 0.8rem 0;
  color: var(--hover);
  font-size: 1.05rem;
  font-weight: 600;
`
