import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   /* largura do scroll vertical e horizonal*/
   ::-webkit-scrollbar { width: 2px; height: 4px; }
   /* Fundo do scroll*/
   ::-webkit-scrollbar-track { background: transparent; }
   /* Cor do scroll*/
   ::-webkit-scrollbar-thumb { background: silver; }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    position: relative;
  }

  body { background-color: #ffffff }

  div.MuiFormControl-marginNormal {
    margin: 7px 0;
  }
  div.MuiDialogContent-root {
    overflow-y: visible;
  }
  div.MuiCircularProgress-root{
    width: 20px !important;
    height: 20px !important;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default GlobalStyle;
