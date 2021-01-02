import React from "react"

import AboutImage from "./AboutImage"
import { Github } from "@styled-icons/evaicons-solid/Github"
import { Instagram } from "@styled-icons/boxicons-logos/Instagram"

import * as S from "./styled"

const About = () => (
  <S.AboutWrapper>

  <S.AboutInfo >
    <S.AboutTitle>Marcus Vinícius</S.AboutTitle> 
    <S.AboutDescription>Tenho 16 ano e estou no ensino médio. Meus conhecimentos abrangem Python, Java Script, HTML, CSS(SCSS), React, Arduino, Photoshop, GIMP e Vegas Pro, nos quais eu sou iniciante. Estou buscando evoluir no aprendizado e determinado a contribuir com um bom projeto.</S.AboutDescription> 
    <S.ButtonContainer>
      <S.Button href="https://github.com/M4rcusVinicius" primary>
        <S.AboutIcon>
          <Github />
        </S.AboutIcon>
        <S.AboutText>
          Github
        </S.AboutText>
      </S.Button>
      <S.Button href="https://www.instagram.com/maquina_do_mundo/">
        <S.AboutIcon>
          <Instagram />
        </S.AboutIcon>
        <S.AboutText>
          Instagram
        </S.AboutText>
      </S.Button>
    </S.ButtonContainer>
  </S.AboutInfo>

  <AboutImage />
  
  </S.AboutWrapper>

)

export default About