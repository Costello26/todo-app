import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }
    #root{
        width: 100%;
    }
    body{
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        background-color: #eee;
    }
`;