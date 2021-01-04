import styled from "styled-components"

export const ListWrapper = styled.section`
  margin: 4.75rem 6rem;
`

export const ListContent = styled.section`
  margin-top: 2rem;

  body#grid & {
    display: grid;
    grid-area: posts;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`

export const ListTitle = styled.h1`
  font-weight: 900;
  color: #71a4d0;
  font-size: 3.5rem;
`