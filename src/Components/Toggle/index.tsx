import { useState } from 'react';
import { CiLight } from 'react-icons/ci';
import { FaRegMoon } from 'react-icons/fa';
import styled from 'styled-components';
import { txtHighContrast } from 'UI/variables';

const BtnToggle = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    gap: .7rem;
    cursor: pointer;
`

const Text = styled.p`
    color: ${txtHighContrast};
    letter-spacing: 3px;
    text-transform: uppercase;
`

export default () => {
    const [darkMode, setDarkMode] = useState(false)

    return(
        <BtnToggle onClick={() => setDarkMode(!darkMode)}>
            <Text>
                {darkMode ? 'Light' : 'Dark'}
            </Text>
            { darkMode ? <CiLight color='white' size={25}/> : <FaRegMoon color='white' size={20}/>}
        </BtnToggle>
    )
}

