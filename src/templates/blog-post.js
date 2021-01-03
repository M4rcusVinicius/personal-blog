import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/Image' 

import * as S from '../components/Post/styled'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <S.PostWrapper>

        <S.PostArticle>
          <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
          <S.PostInfo>{post.frontmatter.category} • {post.frontmatter.subject} • {post.timeToRead} min de leitura</S.PostInfo>

          <Image image={post.frontmatter.image} borderRadius="5px 5px 0 0" height="28rem" slug={post.frontmatter.title} origin={ class="blog-post" } />
          <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
          <S.PostContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </S.PostContent>
        </S.PostArticle>

      </S.PostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
      html
    }
  }
`

export default BlogPost