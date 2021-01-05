import React from "react"
import propTypes from "prop-types"

import { RewindRightOutline } from "@styled-icons/evaicons-outline/RewindRightOutline"
import { RewindLeftOutline } from "@styled-icons/evaicons-outline/RewindLeftOutline"
import { ArrowRightOutline } from "@styled-icons/evaicons-outline/ArrowRightOutline"
import { ArrowLeftOutline } from "@styled-icons/evaicons-outline/ArrowLeftOutline"

import * as S from "./styled"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
  basePath,
}) => {
  let start = 0
  let end = numPages
  let haveEnd = false
  let haveStart = false
  let pages = []

  if ((numPages < 5 + 1) | (currentPage < 4)) {
    if (numPages > 5) {
      end = 5
      haveEnd = false
    } else {
      end = numPages
    }
  } else {
    if (numPages - (currentPage + 2) < 0) {
      end = numPages
      start = currentPage - 4
    } else {
      start = currentPage - 2
      end = currentPage + 2
      haveEnd = false
    }
  }

  if (currentPage > 3) {
    haveStart = true
  }

  if (currentPage < numPages - 2) {
    haveEnd = true
  }

  for (var i = start; i < end; i++) {
    if (i === 0) {
      pages.push({ url: `${basePath}`, number: i + 1 })
    } else {
      pages.push({ url: `${basePath}pagina/` + (i + 1), number: i + 1 })
    }
  }

  return (
    <S.PaginationWrapper>
      <S.PaginationContainer>
        {!(isFirst | (currentPage === 2)) && (
          <S.PaginationLink className="button" to={basePath}>
            <RewindLeftOutline />
          </S.PaginationLink>
        )}
        {!isFirst && (
          <S.PaginationLink className="button" to={prevPage}>
            <ArrowLeftOutline />
          </S.PaginationLink>
        )}
        {haveStart && (
          <S.PaginationLink to={`${basePath}pagina/${currentPage - 2}`}>
            ...
          </S.PaginationLink>
        )}
        {pages.map((page, index) => {
          return (
            <S.PaginationLink to={page.url} key={i} activeClassName="active">
              {page.number}
            </S.PaginationLink>
          )
        })}
        {haveEnd && (
          <S.PaginationLink to={`${basePath}pagina/${currentPage + 3}`}>
            ...
          </S.PaginationLink>
        )}
        {!isLast && (
          <S.PaginationLink className="button" to={nextPage}>
            <ArrowRightOutline />{" "}
          </S.PaginationLink>
        )}
        {!(isLast | (currentPage === numPages - 1)) && (
          <S.PaginationLink className="button" to={`${basePath}pagina/` + numPages}>
            <RewindRightOutline />
          </S.PaginationLink>
        )}
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
  basePath: propTypes.string,
}

export default Pagination
