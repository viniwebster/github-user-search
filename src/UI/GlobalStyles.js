import { createGlobalStyle } from 'styled-components';
import { bg, primaryFont } from './variables';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${primaryFont};
        transition: all 0.2s ease-in-out;
    }

    body{ 
        background-color: ${({ theme }) => theme.bgBox};
    }

    li{
        list-style: none;
    }

    a {
        text-decoration: none;
    }
`