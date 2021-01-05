import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { CaretRightSquare } from '@styled-icons/boxicons-regular/CaretRightSquare'
import PostItem from '../../PostItem'

import * as S from './styled'

const PostGroup = ({category}) => {

  const { robotica, programacao, projeto } = useStaticQuery(graphql`
    query {
      robotica: allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "robotica"}}}
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
      programacao: allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "programacao"}}}
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
      projeto: allMarkdownRemark(
        filter: {frontmatter: {category: {eq: "projeto"}}}
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
  let categoryName = ''

  if (category === "projeto") {
    postGroup = projeto.edges
    categoryName = 'Projeto'
  } else if (category === "programacao") {
    postGroup = programacao.edges
    categoryName = 'Programação'
  } else if (category === "robotica") {
    postGroup = robotica.edges
    categoryName = Robótica
  } else {
    postGroup = robotica.edges
  }

  return ( 
  <S.PostGroupWrapper>
      <S.PostGroupTitle><CaretRightSquare className="icon" /> {categoryName} <S.Button to={category}><span>Ver mais</span></S.Button></S.PostGroupTitle>

    <S.PostGroupContent>
    {postGroup.slice(0, 6).map(
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
            category={categoryName}
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
