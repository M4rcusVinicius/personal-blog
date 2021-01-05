import styled from "styled-components"
import { Link } from "gatsby"

export const NewPostWrapper = styled.section`
  width: 100%;
  padding: 4rem 6rem;
`

export const NewPostItemWrapper = styled.div`
  background-color: var(--back);
  border-radius: 8px;
  transition: 200ms;
  padding: 1rem;
  margin: 4rem 0;

  &:hover {
    translate: 2px -4px;
  }
`

export const NewPostItemCardContent = styled.div`
  display: flex;
  justify-content: ${props => props.reverse ? "flex-start" : "flex-end"};
  position: relative;
  top: -1.8rem;
  left: ${props => props.reverse ? "-1.8rem" : "1.8rem"};
`

export const NewPostItemCard = styled.div`
  text-align: center;
  background: var(--card);
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 800;
  color: var(--cardText);
  position: absolute;
  transform: ${props => props.reverse ? "rotate(-12deg)" : "rotate(12deg)"};
  padding: 0.7rem 1.7rem;
`

export const NewPostItemLink = styled(Link)`
  text-decoration: none;
  display: flex;
  border-radius: 5px;
  height: 19rem;
  flex-direction: ${props => props.reverse ? "row-reverse" : "row"};
  transition: 200ms;
`

export const NewPostItemImage = styled.div`
  width: 25rem;
`

export const NewPostItemInfoContainer = styled.div`
  padding: ${props => props.reverse ? "2rem 2rem 2rem 0" : "2rem 0 2rem 2rem"};;
  width: 60%;
`

export const NewPostItemTitle = styled.div`
  color: var(--textIntense);
  font-size: 2rem;
  font-weight: 800;
`

export const NewPostItemInfo = styled.div`
  color: var(--textInfo);
  font-size: 1.4rem;
  font-weight: 700;
  margin: 1.2rem 0;
`

export const NewPostItemDescription = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;

  color: var(--textSoft);
  font-size: 1.2rem;
  font-weight: 500;
`

