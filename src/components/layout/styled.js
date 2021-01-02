
import styled from "styled-components"

export const LayoutWrapper = styled.section`
  background-color: var(--bottom);
`

export const LayoutMain = styled.main`
  min-height: 100vh;
  width: 100%;

  body#grid & {
    grid-template-areas:
      "posts"
      "pagination";
  }
  
`