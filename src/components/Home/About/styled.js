import styled from 'styled-components'

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--back);
  padding: 0rem 5rem;
  height: calc(100vh - 6.2rem);
`

export const AboutInfo = styled.div`
  max-width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const AboutTitle = styled.h1`
  font-weight: 700;
  color: var(--title);
  font-size: 3rem;
  
  line-height: 1;
  letter-spacing: 0.1rem;
`

export const AboutDescription = styled.p`
  font-weight: 500;
  color: var(--soft);
  font-size: 1.2rem;
  margin-top: 3.2rem;
`


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 23rem;
  margin-top: 3.2rem;
`

export const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-radius: 10px;
  color: var(--text);
  border: 2px solid var(--button);
  background-color: ${(props) => (props.primary ? 'var(--button)' : 'none')};
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  transition: 200ms;

  &:hover {
    box-shadow: inset 0 0 20px var(--btnHover),0 0 10px var(--btnHover);
    border: 2px solid var(--btnHover);
    transform: scale(1.02);
  }
`

export const AboutIcon = styled.div`
  display: block;
  height: 1.5em;
  width: 1.5rem;
`

export const AboutText = styled.div`
  margin: 0 1rem;
`