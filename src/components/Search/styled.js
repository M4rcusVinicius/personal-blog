import styled from "styled-components"

export const SearchWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  .ais-InstantSearch__root {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .ais-SearchBox,
  .ais-Stats {
    padding: 0.5rem 6rem;
  }
  .ais-SearchBox {
    padding-top: 4.75rem;
  }
  .ais-Stats {
  }
  .ais-SearchBox-input {
    display: flex;
    font-size: 1.6rem;
    padding: 0.8rem;
    width: 100%;
    color: var(--SearchInput);
    border-radius: 5px;
    background-color: var(--back);
    &::placeholder {
    }
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset {
    display: none;
  }
  .ais-Hits-list {
    margin: 3rem 6rem;

    body#grid & {
    display: grid;
    grid-area: ais-Hits-list;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
  }
`