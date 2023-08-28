import styled from 'styled-components';
import { bgSecondary } from './variables';
import { txtMidContrast, txtHighContrast } from './variables';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh;
    max-width: 800px;
    margin: auto;
    padding: 4rem 0;
    @media screen and (max-width: 890px){
        max-width: 80vw;
    }
`

export const Box = styled.section`
    background-color: ${bgSecondary};
    border-radius: 1rem;
    padding: 3rem;
    width: 100%;
    @media screen and (max-width: 490px){
        padding: 2rem;
    }
`

export const Paragrafos = styled.p`
  color: ${txtHighContrast};
  @media screen and (max-width: 500px){
    font-size: 14px;
  }
`;

export const TextBold = styled.h2`
font-weight: 700;
font-size: 24px;
color: ${txtHighContrast};

@media screen and (max-width: 500px){
    font-size: 18px;
}
`;
