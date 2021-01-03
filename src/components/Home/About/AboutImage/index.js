import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './styled'

const AboutImage = () => {
  const { aboutImage } = useStaticQuery(graphql`
    query {
      aboutImage: file(relativePath: { eq: "profile-cyberpunk.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!aboutImage?.childImageSharp?.fluid) {
    console.log('About image not found')
    return <div>Imagem não encontrada</div>
  }

  return (
    <S.AboutImageWrapper>
      <S.AboutImage fluid={aboutImage.childImageSharp.fluid} />
    </S.AboutImageWrapper>
  )
}

export default AboutImage
