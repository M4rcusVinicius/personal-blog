import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LogoImage from './LogoImage'

import * as S from './styled'

const Logo = () => {
  const {
    site: {
      siteMetadata: { title, position },
    },
  } = useStaticQuery(graphql`
    query MySiteMetadata {
      site {
        siteMetadata {
          title
          position
        }
      }
    }
  `)

  return (
    <S.LogoWrapper>
      <S.LogoLink to="/">
        <LogoImage />
        <S.LogoTextContent>
          <S.LogoText>{title}</S.LogoText>
          <S.LogoPosition>{position}</S.LogoPosition>
        </S.LogoTextContent>
      </S.LogoLink>
    </S.LogoWrapper>
  )
}

export default Logo