import { CiLight } from 'react-icons/ci';
import { FaRegMoon } from 'react-icons/fa';
import styled from 'styled-components';

interface PropsToggle{
    switchTheme: () => void
    iconTheme: boolean
}

const BtnToggle = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    gap: .7rem;
    cursor: pointer;
`

const Text = styled.p`
    color: ${({ theme }) => theme.text};
    letter-spacing: 3px;
    text-transform: uppercase;
`

export default ({ switchTheme, iconTheme }: PropsToggle) => {
    return(
        <BtnToggle onClick={switchTheme}>
            <Text>
                {iconTheme ? 'Light' : 'Dark'}
            </Text>
            { iconTheme ? <CiLight color={iconTheme ? 'white' : '#697c9a'} size={25}/> : <FaRegMoon color={iconTheme ? 'white' : '#697c9a'
            } size={20}/>}
        </BtnToggle>
    )
}

