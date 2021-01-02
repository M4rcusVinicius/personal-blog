import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from '../components/PostItem'
import Pagination from '../components/Pagination'

import * as S from "../components/PostList/styled"

const BlogList = props => {
  const postList = props.data.allMarkdownRemark.edges    

  const { currentPage, numPages } = props.pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`


  return (
    <Layout>
      <SEO title="Home" />
      <S.ListContent>
        {postList.map(
          ({
            node: {
              frontmatter: { category, date, description, image, title, subject },
              timeToRead,
              fields: { slug },
            },
          }) => {

            return (
              <PostItem 
                origin={{class: 'home', filter: null}}
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

      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
      
    </Layout>
  )
}

export const query = graphql`
    query PostList($skip: Int!, $limit: Int!) {
      allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
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

export default BlogList