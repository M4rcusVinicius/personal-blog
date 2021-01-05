import styled from "styled-components"
import { Link } from "gatsby"

export const MenuFunctionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  --size: 3.5rem;
`


export const MenuFunctionLink = styled(Link)`
  cursor: pointer;
  display: block;
  height: var(--size);
  position: relative;
  width: var(--size);
  color: var(--NavText);
  transition: color 200ms;
  position: relative;
  z-index: 4;

  &.light {
    &:hover {
    }
  }
  &:hover {
    color: var(--NavTextHover);
  }
`

export const MenuFunctionItem = styled.span`
  cursor: pointer;
  display: block;
  height: var(--size);
  position: relative;
  width: var(--size);
  padding: 1rem;
  color: var(--NavText);
  transition: color 200ms;
  position: relative;
  z-index: 4;

  &.light {
    &:hover {
    }
  }
  &:hover {
    color: var(--NavTextHover);
  }
`