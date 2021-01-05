import styled from 'styled-components'
import { Link } from "gatsby"

export const PaginationWrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PaginationLink = styled(Link)`
  transition: 200ms;
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  background-color: var(--button);
  margin: 0 0.5rem;
  border-radius: 10px;
  height: 3rem;
  width: 3rem;

  display: flex;
  align-content: center;
  justify-content: center;
  color: var(--text);
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 2rem;

  &:hover {
    transform: translate(1px, -2px);
    background-color: var(--buttonHover);
  }

`

export const PaginationContainer = styled.div`
  display: flex;
  .active {
    background-color: var(--buttonHover);
  }
  .button {
    background-color: var(--buttonPagination);
  }

`