import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-size: 100%;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: 0.069rem;
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }

  body.light {
    color: #C7CDD6;

    --back: #080A0B;
    --bottom: #26282C;

    --title: #69CEE8;
    --subTitle: #84B4E8;
    --text: #E8F4FA;
    --textSoft: #C7CDD6;
    --info: #71A4D0;

    --soft: #C7CDD6;
    --button: #1E498A;
    --btnHover: #1E60C2;
    --hover: #00b8e4;
    --shadow: black;
  }

  body.cyber {
    color: #C7CDD6;

    --back: #080A0B;
    --bottom: #26282C;
    --shadow: #26282C;
    --hover: #26282C;

    --button: #1e498a;
    --buttonPagination: #1d7930;
    --buttonHover: #1E60C2;
    --linkHover: #10A1E8;
    --link: #227BA6;
    --icon: #1AABFF;
    --cardText: #E8F4FA;
    --card: #6B66F9;
    --selectBorder: #71a4d0;
    --postListTitle: #71a4d0;
    --SearchInput: #fff;
    
    --title: #69CEE8;
    --titleFeatured: #69cee8;
    
    --text: #E8F4FA;
    --textIntense: #e8f4fa;
    --textInfo: #69cee8;
    --textLogo: #E8F4FA;
    --navText: #e8f4fa;
    --NavTextHover: #00b8e4;
    --textSoft: #C7CDD6;
    --textSoftTitle: #71A4D0;
    --textDescription: #C7CDD6;
    --textTitle: #E8F4FA;

    --postTitle: #c7cdd6;
    --postInfo: #69CEE8;
    --postDescription: #C7CDD6;
    --postSubTitle: #84B4E8;
    --postBlockquote: #C7CDD6;
    --postBlockquoteBorder: #84B4E8;
    --postText: #C7CDD6;
    --postListTitle: #26282C;
    --postLink: #1E60C2;
    
  }
`
export default GlobalStyles

