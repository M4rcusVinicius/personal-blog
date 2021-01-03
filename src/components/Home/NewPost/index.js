import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import NewPostItem from "./NewPostItem"

import * as S from './styled'
import * as G from "../../../styles/GlobalComponents"

const NewPost = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        limit: 2
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


  const newPost = data.allMarkdownRemark.edges

  return (
    <S.NewPostWrapper>

      {newPost.map(
            ({
              node: {
                frontmatter: { category, date, description, image, title, subject },
                timeToRead,
                fields: { slug },
              },
            }, index) => {

              return (
                <NewPostItem 
                  origin={{class: 'home', filter: null}}
                  slug={slug}
                  date={date}
                  title={title}
                  description={description}
                  category={category}
                  subject={subject}
                  timeToRead={timeToRead}
                  image={image}
                  index={index}
                />
              )
            } 
          )}
    </S.NewPostWrapper>
  )
}

export default NewPost
