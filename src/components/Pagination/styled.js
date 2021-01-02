import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  align-items: center;
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: space-between;
  a {
    color: black;
    text-decoration: none;
    transition: color 0.5s;
    &:hover {
      color: blue;
    }
  }
`