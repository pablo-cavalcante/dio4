import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    html body {
        height: 100vh;
        width: 100vw;
        margin: 0px;
        padding: 0px;
        font-family: "Montserrat", sans-serif!important;
        font-optical-sizing: auto;
        font-style: normal;
        font-size: small;
        overflow: hidden!important;
    }
`;
