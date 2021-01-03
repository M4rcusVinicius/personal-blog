import React, { useState } from "react";
import { Eye } from '@styled-icons/fa-regular/Eye'

import * as S from "./styled"

const Select = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);
  
  return(
    <S.SelectWrapper>
      <Eye onClick={toggling} />
        {isOpen && (
          <S.SelectContainer>
            <S.Select>
              <S.ListItem>Mangoes</S.ListItem>
              <S.ListItem>Apples</S.ListItem>
              <S.ListItem>Oranges</S.ListItem>
            </S.Select>
          </S.SelectContainer>
        )}
    </S.SelectWrapper>
)}

export default Select