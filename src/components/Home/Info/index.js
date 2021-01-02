import React from "react"

import { UserGraduate } from "@styled-icons/fa-solid/UserGraduate"
import { LightBulb } from "@styled-icons/octicons/LightBulb"
import { ProjectDiagram } from "@styled-icons/fa-solid/ProjectDiagram"

import * as S from "./styled"

const Info = () => (
  <S.InfoWrapper>
    <S.InfoList>
      <S.InfoItem >
        <S.InfoIcon>
          <ProjectDiagram />
        </S.InfoIcon>
        <S.InfoText>Portfólio</S.InfoText>
        <S.InfoDescription>Meus projetos são disponibilizados sem fins lucrativos no github e em plataformas publicas como template</S.InfoDescription>
      </S.InfoItem>
      <S.InfoItem >
        <S.InfoIcon>
          <UserGraduate />
        </S.InfoIcon>
        <S.InfoText>Experiência</S.InfoText>
        <S.InfoDescription>Cursos online ( YouTube, Udemy e Alura ) e muita prática por meio de Hackathons e projetos pessoais  </S.InfoDescription>
      </S.InfoItem>
      <S.InfoItem >
        <S.InfoIcon>
          <LightBulb />
        </S.InfoIcon>
        <S.InfoText>Maquina do Mundo</S.InfoText>
        <S.InfoDescription>Conta no instagram criada no dia 9 de outubro onde eu publico meus projetos de programação e robótica.</S.InfoDescription>
      </S.InfoItem>
    </S.InfoList>
  </S.InfoWrapper>
)

export default Info