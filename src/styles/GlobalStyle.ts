import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #__next {
    min-width: 99.6vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;

    background: ${props => props.theme.colors.background.normal};
    color: ${props => props.theme.colors.text.normal};

    overflow-x: visible;
  }

  body {
    /* background: ${props => props.theme.colors.background.normal};
     &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      background-image: url("/images/neon2.jpg");
      background-size: cover;
      background-attachment: fixed;

      z-index: -1;
      opacity: 0.58;
    } */
  }
  #__next {
    display: flex;

    /* background: ${props => rgba(props.theme.colors.background.dark, 0.4)};
    backdrop-filter: blur(20px); */

  }

  @media (max-width: 1088px){
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px){
    html {
      font-size: 87.5%;
    }
  }


  body, input, textarea, button, select, a {
    color: inherit;
    outline: none;

    text-decoration: none;
    // font: 400 1rem 'Nunito', 'Roboto', sans-serif;
    font-family: 'Nunito', 'Roboto', sans-serif;
  }

  /* heading */
  h1, h2, h3, h4, h5, h6 {
    margin:0 0 25px;
    padding:0;

    letter-spacing: 0;
    font-weight: 400;

    color: ${({ theme }) => theme.colors.text.normal};
    font-family: 'Source Serif Pro', serif;
    /* font-family: 'Nunito', 'Roboto', sans-serif; */
  }
  h1 {font-size:70px; line-height: 70px}
  h2 {font-size:55px; line-height:60px}
  h3 {font-size:48px; line-height:54px}
  h4 {font-size:40px; line-height:46px}
  h5 {font-size:32px; line-height:40px}
  h6 {font-size:25px; line-height:30px}


  button {
    cursor: pointer;
  }
  input[type=search] {
    -webkit-appearance: textfield;
    -webkit-box-sizing: content-box;
    font-family: inherit;
    font-size: 100%;
  }
  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button {
    display: none;
  }
  ::-webkit-scrollbar {
    width: 4px;
    background: ${({ theme }) => theme.colors.background.normal};
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => rgba(theme.colors.background.lighter, 1)};
    border-radius: 50px;
  }
`
