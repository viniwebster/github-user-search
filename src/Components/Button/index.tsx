import styled from 'styled-components';
import { primary, primaryHover, primaryFont } from 'UI/variables'
 
const Button = styled.button`
    background-color: ${primary};
    color: white;
    padding: .8rem 1.25rem;
    border: none;
    border-radius: 8px;
    font-family: ${primaryFont};
    &:hover{
        background-color: ${primaryHover};
        transition: .2s;
        cursor: pointer;
    }
`

interface PropsButton {
    type?: 'submit' | 'reset';
}

export default ({ type }: PropsButton) => {
    return(
        <Button type={type}>
            Search
        </Button>
    )
}