import { createGlobalStyle } from "styled-components";


const GlobalStyles = createGlobalStyle`

*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins';
}
body{
    padding: 70px 100px 0;
    background: linear-gradient(rgb(44, 51, 41) 0%, rgb(77, 77, 77) 100%, rgb(66, 77, 61) 100%);
    background-repeat: no-repeat;
    margin: 0px;
    padding: 70px 100px 0px;
    box-sizing: border-box;
}


`;

export default GlobalStyles;