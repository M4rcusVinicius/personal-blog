import styled from "styled-components"
import { Link } from 'gatsby'

export const PostGroupWrapper = styled.section`
  padding: 4rem 6rem;
`

export const PostGroupContent = styled.div`
  margin-top: 2rem;

  body#grid & {
    display: grid;
    grid-area: posts;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`

export const PostGroupTitle = styled.h1`
  color: var(--info);
  font-size: 3.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;

  & .icon {
    margin-right: 1rem;
    display: block;
    height: 4rem;
    width: 4rem;
  }
`

export const Button = styled(Link)`
  display: inline-block;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-radius: 10px;
  color: var(--text);
  border: 2px solid var(--button);
  background-color: ${(props) => (props.primary ? 'var(--button)' : 'none')};
  font-weight: 600;
  font-size: 1rem;
  transition: 200ms;
  margin: 0 0 0 auto;
  width: 10rem;

  & span {
    margin: 0 auto;
    text-align: center;
  }

  &:hover {
    box-shadow: inset 0 0 20px var(--btnHover),0 0 10px var(--btnHover);
    border: 2px solid var(--btnHover);
    transform: scale(1.02);
  }
`