import styled from "styled-components"

export const SelectWrapper = styled.div`
  position: relative;

`

export const SelectEye = styled.span`
  cursor: pointer;
  display: block;
  position: relative;
  color: var(--text);
  transition: color 200ms;
  position: relative;
  z-index: 4;

  &:hover {
    color: var(--hover);
  }
`

export const SelectHideout = styled.div`
  position: absolute;
  z-index: 2; 
  top: -7.6rem;
  left: -1rem;
  width: 8rem;
  height: 10rem;
  background-color: var(--back);
`

export const SelectOptions = styled.div`
  position: relative;
  z-index: 1; 
  background-color: var(--back);
  padding: 1rem 0 0;
  left: -1rem;
  width: 8rem;
  top: -8rem;
  border-radius: 0 0 8px 8px;
  border: solid #71a4d0 2px; 
  border-top: none;
  transition: 400ms;


  ${SelectWrapper}:hover & {
    top: 0.8rem;
  }
`

export const SelectItem = styled.span`
  cursor: pointer;
  display: block;
  height: 1.4rem;
  position: relative;
  width: 1.4rem;
  color: var(--text);
  transition: color 200ms;
  margin-bottom: 1rem;

  &:hover {
    color: var(--hover);
  }
`

export const SelectIcon = styled.span`
  cursor: pointer;
  display: block;
  height: 1.4rem;
  position: relative;
  width: 1.4rem;
  color: var(--text);
  transition: color 200ms;
  margin-bottom: 1rem;

  &:hover {
    color: var(--hover);
  }
`

