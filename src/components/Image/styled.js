import styled from "styled-components"
import Img from "gatsby-image"

export const Image = styled(Img)`
  border-radius: ${props => props.borderRadius ? props.borderRadius : "9px "};
  height: ${props => props.height ? props.height : "18rem"};
  width: ${props => props.postItem === "true" ? "30%" : props.width };
  max-height: ${props => props.maxHeight};
  max-width: ${props => props.maxWidth};

  body#grid & {
    width: ${props => props.width};
  }
`

export const ImageNotFound = styled(Img)`
  border-radius: ${props => props.borderRadius ? props.borderRadius : "10px"};
  height: ${props => props.height ? props.height : "14rem"};
  width: ${props => props.width};
  max-height: ${props => props.maxHeight};
  max-width: ${props => props.maxWidth};
  background-color: var(--textSoft);
`