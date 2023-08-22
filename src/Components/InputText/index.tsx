import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import Button from 'Components/Button';
import { bgSecondary, txtHighContrast, primary } from 'UI/variables';

const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .7rem;
    background-color: ${bgSecondary};
    border-radius: .8rem;
`

const Input = styled.input`
    padding: .7rem;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${txtHighContrast};
    width: 100%;

    &::placeholder{
        color: ${txtHighContrast};
    }
`

export default () => {
  return (
    <Form>
        <BsSearch style={{marginLeft: 12}} size={25} color={`${primary}`}/>
            <Input type='text' placeholder='Search GitHub username...'/>
        <Button type='submit'/>
    </Form>
  )
}
