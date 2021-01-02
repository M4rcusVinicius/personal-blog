import styled from "styled-components"
import { Link } from "gatsby"

export const MenuFunctionWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 8rem;
  justify-content: space-between;
`


export const MenuFunctionLink = styled(Link)`
  cursor: pointer;
  display: block;
  height: 1.4rem;
  position: relative;
  width: 1.4rem;
  color: var(--text);
  transition: color 200ms;

  &.light {
    &:hover {
    }
  }
  &:hover {
    color: var(--hover);
  }
`

export const MenuFunctionItem = styled.span`
  cursor: pointer;
  display: block;
  height: 1.4rem;
  position: relative;
  width: 1.4rem;
  color: var(--text);
  transition: color 200ms;

  &.light {
    &:hover {
    }
  }
  &:hover {
    color: var(--hover);
  }
`