import { createGlobalStyle } from 'styled-components';
import { bg, primaryFont } from './variables';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: ${primaryFont};
    }

    body{ 
        background-color: ${bg};
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: white;
    }
`