import styled from 'styled-components';
import { bgSecondary } from './variables';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    max-width: 800px;
    margin: auto;
`

export const Box = styled.section`
    background-color: ${bgSecondary};
    border-radius: 1rem;
    padding: 3rem;
`