import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html{
    height: 100%;
    > a, button, input {
    cursor: pointer;
  }
  }
  body{
    -webkit-font-font-smoothing: antialiased;
    background-color: #F2EFED;
  }
  body, input, button{
    font: 16px;
    font-family: Roboto, sans-serif;
  }
  #root{
    margin: 0;
  }
  button {
    cursor: pointer;
  }
`;
