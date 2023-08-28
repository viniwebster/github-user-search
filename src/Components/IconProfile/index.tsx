import { dados } from 'context/ApiContext';
import styled from 'styled-components';

const IconProfile = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

export default () => {

    const { icon } = dados();

    return(
        <>
            <IconProfile src={icon}/>
        </>
    )
}