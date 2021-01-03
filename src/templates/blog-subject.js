import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import * as S from "../components/PostList/styled"

const BlogSubject = props => {
  const postSubject = props.data.allMarkdownRemark.edges    

  const {  currentPage, numSubjectPages, subject } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numSubjectPages
  const prevPage = currentPage - 1 === 1 ? `/${subject}/` : `/${subject}/pagina/${currentPage - 1}`
  const nextPage = `/${subject}/pagina/${currentPage + 1}`
  const basePath = `/${subject}/`

  return (
    <Layout>
      <SEO
        title={`Materias | pagina ${currentPage + 1}`}
      />
      <S.ListWrapper>

        <S.ListTitle>{subject}</S.ListTitle>
        
        <S.ListContent>
          {postSubject.map(
            ({
              node: {
                frontmatter: { category, date, description, image, title, subject },
                timeToRead,
                fields: { slug },
              },
            }) => {

              return (
                <PostItem  
                  origin={{class: 'subject', filter: subject}}
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  category={category}
                  subject={subject}
                  timeToRead={timeToRead}
                  image={image}
                />
              )
            } 
          )}
        </S.ListContent>
      </S.ListWrapper>
      
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numSubjectPages}
        prevPage={prevPage}
        nextPage={nextPage}
        basePath={basePath}

      />
      
    </Layout>
  )
}

export const query = graphql`
  query SubjectList($subject: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
      filter: {frontmatter: {subject: {eq: $subject }}}
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            subject
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogSubject