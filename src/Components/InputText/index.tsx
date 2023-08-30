import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';
import Button from 'Components/Button';
import { bgSecondary, txtHighContrast, primary } from 'UI/variables';
import { dados } from 'context/ApiContext';

const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .7rem;
    background-color: ${({ theme }) => theme.bg};
    border-radius: .8rem;
`

const Input = styled.input`
    padding: .7rem;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text};
    width: 100%;
    font-size: 1rem;

    &::placeholder{
        color: ${({ theme }) => theme.text};
        letter-spacing: 2px;
    }
    
    @media screen and (max-width: 500px){
    font-size: 14px;
  }
`

const Error = styled.p`
    align-self: center;
    color: #fe6a6a;
`

export default () => {

  const { search ,setSearch, searchUser, erro } = dados();

  return (
    <Form onSubmit={(event) => searchUser(event)}>
        <BsSearch style={{marginLeft: 12}} size={30} color={`${primary}`}/>
            <Input type='text' placeholder='Search GitHub username...' value={search} onChange={(event) => setSearch(event.target.value)}/>
            {
            erro ? 
            <Error>
                Not Found
            </Error>
            :''
            }
        <Button type='submit'/>
    </Form>
  )
}
