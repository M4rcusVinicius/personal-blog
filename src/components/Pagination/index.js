import React from "react"
import propTypes from "prop-types"

import { RewindRightOutline } from '@styled-icons/evaicons-outline/RewindRightOutline'
import { RewindLeftOutline } from '@styled-icons/evaicons-outline/RewindLeftOutline'
import { ArrowRightOutline } from '@styled-icons/evaicons-outline/ArrowRightOutline'
import { ArrowLeftOutline } from '@styled-icons/evaicons-outline/ArrowLeftOutline'

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {

  let start = 0
  let end = numPages
  let pages = []
 
  if ( numPages < 5 + 1 | currentPage < 4) {
    if (numPages > 5) {
      end = 5
    } else {
      end = numPages
    }
  } else {
    if (numPages - (currentPage + 2) < 0) {
      console.log("Muito perto do fim")
      end = numPages
      start = currentPage - 4
    } else {
      start = currentPage - 2
      end = currentPage + 2
    }
  }

  for (var i = start; i < end ; i++) {
    pages.push({url: "/page/" + i, number: i + 1})
    if (i === currentPage) {
      console.log("=> /page/" + i)
    } else {
      console.log("/page/" + i)
    }
  }
  
  return(
    <S.PaginationWrapper>
      <S.PaginationContainer>
        {!isFirst && <S.PaginationLink to={"/page/1"}> <RewindLeftOutline/> </S.PaginationLink>}
        {!isFirst && <S.PaginationLink to={prevPage}> <ArrowLeftOutline/> </S.PaginationLink>}
        {pages.map((page, index) => {
          console.log("URL: " + page.url)
          console.log("Number: " + page.number)
          return (
            <S.PaginationLink key={i}>{page.number}</S.PaginationLink>
          )
        })}
        {!isLast && <S.PaginationLink to={nextPage}> <ArrowRightOutline /> </S.PaginationLink>}
        {!isLast && <S.PaginationLink to={"/page/" + numPages}> <RewindRightOutline /> </S.PaginationLink>}
      </S.PaginationContainer>
    </S.PaginationWrapper>
  )
}
Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination