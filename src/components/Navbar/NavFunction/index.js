import React, { useState, useEffect } from "react"

import Select from '../Select'

//import { Moon } from "@styled-icons/boxicons-regular/Moon"
//import { Brightness } from "@styled-icons/boxicons-regular/Brightness"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ThList as List } from "@styled-icons/typicons/ThList"
import { SearchAlt2 as Search } from "@styled-icons/boxicons-regular/SearchAlt2"

import * as S from "./styled"

const MenuFunction = () => {
  const [DisplayMode, setDisplayMode] = useState(null)

  const isListMode = DisplayMode === "list"

  useEffect(() => {
    setDisplayMode(window.__display)

    window.__onDisplayChange = () => setDisplayMode(window.__display)
  }, [])

  return (
    <S.MenuFunctionWrapper>
        <S.MenuFunctionItem >
          <Select />
        </S.MenuFunctionItem>

        <S.MenuFunctionItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </S.MenuFunctionItem>

        <S.MenuFunctionLink to="/pesquisa/" title="Pesquisar">
          <S.MenuFunctionItem>
            <Search />
          </S.MenuFunctionItem>
        </S.MenuFunctionLink>

    </S.MenuFunctionWrapper>
  )
}

export default MenuFunction

























/* 

<S.MenuFunctionItem
  title="Mudar o tema"
  onClick={() => {
    window.__setPreferredTheme(isDarkMode ? "light" : "dark")
  }}
  className={theme}
>
  {isDarkMode ? <Brightness /> : <Moon />}
</S.MenuFunctionItem>

*/