import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { CaretRightSquare } from '@styled-icons/boxicons-regular/CaretRightSquare'

import PostItem from '../../PostItem'

import * as S from './styled'

const PostGroup = ({category}) => {
  const { redacao, trabalho, resumo } = useStaticQuery(graphql`
    query {
      redacao: allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "redacao"}}}
        sort: { fields: frontmatter___date, order: DESC }
        limit: 6
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
      trabalho: allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "trabalho"}}}
        sort: { fields: frontmatter___date, order: DESC }
        limit: 10
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
      resumo: allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "resumo"}}}
        sort: { fields: frontmatter___date, order: DESC }
        limit: 10
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
  `)

  let postGroup = {}
  let limit = 6

  if (category === "resumo") {
    postGroup = resumo.edges
  } else if (category === "trabalho") {
    postGroup = trabalho.edges
  } else if (category === "redacao") {
    postGroup = redacao.edges
  } else {
    postGroup = redacao.edges
  }

  if (document.body.id.includes("list")) {
    limit = 3
  }

  return ( 
  <S.PostGroupWrapper>
      <S.PostGroupTitle><CaretRightSquare className="icon" /> {category} <S.Button to={category}><span>Ver mais</span></S.Button></S.PostGroupTitle>

    <S.PostGroupContent>
    {postGroup.slice(0, limit).map(
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
    </S.PostGroupContent>
        
  </S.PostGroupWrapper>
  )
}

export default PostGroup
