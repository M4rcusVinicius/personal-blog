import styled from 'styled-components'

export const PostWrapper = styled.section`
  margin: auto;
  padding: 0 6rem;
  max-width: 80rem;
`

export const PostTitle = styled.h1`
  color: var(--title);
  font-size: 3.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
`

export const PostInfo = styled.h1`
  color: var(--text);
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin: 0.7rem 0 4rem;
`

export const PostArticle = styled.section`
  margin: 4rem 5rem;
`

export const PostDescription = styled.p`
  color: var(--textSoft);
  font-size: 1.5rem;
  font-weight: 600;
  background-color: var(--back);
  padding: 2.2rem 3.4rem 0;

`

export const PostContent = styled.div`
  background-color: var(--back);
  border-radius: 0 0 5px 5px;
  padding: 2rem;

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--textSoft);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    padding: 0 1.4rem;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: var(--subTitle);
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {  
    list-style: circle;
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem 0.8rem;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: var(--titleSoft);
    border-left: 0.3rem solid var(--subTitle);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid var(--textSoft);
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 700;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }
  .gatsby-resp-image-background-image {
    z-index: 2;
    opacity: 1 !important;
  }
  .gatsby-resp-image-image {
    box-shadow: none !important;
    transition: opacity 0.2s;
    &.lazyload {
      opacity: 0;
    }
    &.lazyloaded {
      opacity: 1;
      z-index: 3;
    }
  }
  .gatsby-highlight {
    padding: 0 1.6rem 1.6rem;
  }
  .instagram-media {
    margin: 1rem auto !important;
  }
  a {
    border-bottom: 1px dashed var(--btnHover);
    color: var(--btnHover);
    text-decoration: none;
    transition: opacity 0.5s;
    svg {
      color: var(--back);
    }
    &:hover {
      opacity: 0.8;
    }
  }
`
