import React, { useState, useEffect } from "react"

import { Eye } from "@styled-icons/fa-regular/Eye"
import { Moon } from "@styled-icons/boxicons-regular/Moon"
import { Brightness } from "@styled-icons/boxicons-regular/Brightness"
import { Coffee } from "@styled-icons/boxicons-regular/Coffee"

import * as S from "./styled"

const Select = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  return (
    <S.SelectWrapper>
      <S.SelectEye>
        <Eye/>
      </S.SelectEye>
      <S.SelectHideout/>
      <S.SelectOptions>
        <S.SelectItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme("light")
          }}
        >
          <S.SelectIcon><Brightness /></S.SelectIcon> <p>Light</p>
        </S.SelectItem>
        <S.SelectItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme("dark")
          }}
        >
          <S.SelectIcon><Moon /></S.SelectIcon> <p>Dark</p>
        </S.SelectItem>
        <S.SelectItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme("cyber")
          }}
        >
          <S.SelectIcon><Coffee /></S.SelectIcon> <p>Cyber</p>
        </S.SelectItem>
      </S.SelectOptions>
    </S.SelectWrapper>
  )
}

export default Select

/* 

<S.SelectItem
  title="Mudar o tema"
  onClick={() => {
    window.__setPreferredTheme(isDarkMode ? "light" : "dark")
  }}
  className={theme}
>
  {isDarkMode ? <Brightness /> : <Moon />}
</S.SelectItem>

*/
