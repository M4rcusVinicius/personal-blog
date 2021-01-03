import styled from "styled-components";

export const SelectWrapper = styled.div`
`

export const SelectContainer = styled.div`
  width: 9rem;
  margin-top: 1.5rem;
  position: relative;
  z-index: 2;
  background-color: black;
  padding: 0.8rem;
  border: 2px solid var(--button);
  border-radius: 0 8px 8px;
`

export const Select = styled.ul`

  padding: 0;
  margin: 0;

  color: var(--text);
  font-size: 1.3rem;
  font-weight: 600;
`

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`