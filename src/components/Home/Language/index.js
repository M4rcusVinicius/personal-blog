import React from "react"

import { Python } from "@styled-icons/fa-brands/Python"
import { Javascript } from "@styled-icons/boxicons-logos/Javascript"
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"
import { Nodejs } from "@styled-icons/boxicons-logos/Nodejs"
import { Graphql } from "@styled-icons/simple-icons/Graphql"
import { Gatsby } from "@styled-icons/remix-fill/Gatsby"
import { Css3 } from "@styled-icons/fa-brands/Css3"
import { Html5 } from "@styled-icons/boxicons-logos/Html5"

import * as S from "./styled"


const SubjectLinks = () => (
  <S.SubjectLinksWrapper>
    <S.SubjectLinksList>
    
      <S.SubjectLinksItem >
        <S.SubjectLinksLink className="link" to={`/python/`}>
          <S.SubjectLinksIcon>
            <Python />
          </S.SubjectLinksIcon>
          <S.SubjectLinksText>Python</S.SubjectLinksText>
        </S.SubjectLinksLink>
      </S.SubjectLinksItem>

      <S.SubjectLinksItem >
        <S.SubjectLinksLink className="link" to={`/javascript/`}>
          <S.SubjectLinksIcon>
            <Javascript />
          </S.SubjectLinksIcon>
          <S.SubjectLinksText>Javascript</S.SubjectLinksText>
        </S.SubjectLinksLink>
      </S.SubjectLinksItem>

      <S.SubjectLinksItem >
        <S.SubjectLinksLink className="link" to={`/react/`}>
          <S.SubjectLinksIcon>
            <ReactLogo />
          </S.SubjectLinksIcon>
          <S.SubjectLinksText>React</S.SubjectLinksText>
        </S.SubjectLinksLink>
      </S.SubjectLinksItem>

      <S.SubjectLinksItem >
        <S.SubjectLinksLink className="link" to={`/nodejs/`}>
          <S.SubjectLinksIcon>
            <Nodejs />
          </S.SubjectLinksIcon>
          <S.SubjectLinksText>NodeJS</S.SubjectLinksText>
        </S.SubjectLinksLink>
      </S.SubjectLinksItem>
    
    </S.SubjectLinksList>
    <S.SubjectLinksList>

      <S.SubjectLinksItem >
        <S.SubjectLinksLink className="link" to={`/graphql/`}>
          <S.SubjectLinksIcon>
            <Graphql />
          </S.SubjectLinksIcon>
          <S.SubjectLinksText>GraphQL</S.SubjectLinksText>
        </S.SubjectLinksLink>
      </S.SubjectLinksItem>
      
      <S.SubjectLinksItem >
        <S.SubjectLinksLink className="link" to={`/gatsby/`}>
          <S.SubjectLinksIcon>
            <Gatsby />
          </S.SubjectLinksIcon>
          <S.SubjectLinksText>Gatsby</S.SubjectLinksText>
        </S.SubjectLinksLink>
      </S.SubjectLinksItem>
      
      <S.SubjectLinksItem >
        <S.SubjectLinksLink className="link" to={`/css/`}>
          <S.SubjectLinksIcon>
            <Css3 />
          </S.SubjectLinksIcon>
          <S.SubjectLinksText>CSS</S.SubjectLinksText>
        </S.SubjectLinksLink>
      </S.SubjectLinksItem>
      
      <S.SubjectLinksItem >
        <S.SubjectLinksLink className="link" to={`/html/`}>
          <S.SubjectLinksIcon>
            <Html5 />
          </S.SubjectLinksIcon>
          <S.SubjectLinksText>HTML</S.SubjectLinksText>
        </S.SubjectLinksLink>
      </S.SubjectLinksItem>
    </S.SubjectLinksList>
  </S.SubjectLinksWrapper>
)

export default SubjectLinks