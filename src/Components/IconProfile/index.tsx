import styled from 'styled-components';

const IconProfile = styled.img`
    border-radius: 50%;
    width: 100px;
    height: 100px;
`

export default () => {
    return(
        <>
            <IconProfile src='https://github.com/viniwebster.png'/>
        </>
    )
}