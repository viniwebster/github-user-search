import { Dados } from 'context/ApiContext';
import styled from 'styled-components';
import { Paragrafos, TextBold, Box } from "UI";

const BoxDark = styled(Box)`
  background-color: ${({ theme }) => theme.bgBox};
  padding: 1rem 2rem;
  width: 100%;

  @media screen and (max-width: 500px){
    padding: 1rem;
    text-align: center;
  }
`;

const InfosUser = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default () => {

  const { repos, followers, following } = Dados();

    return (
        <BoxDark>
          <InfosUser>
            <li>
              <Paragrafos>Repos</Paragrafos>
              <TextBold>{repos}</TextBold>
            </li>
            <li>
              <Paragrafos>Followers</Paragrafos>
              <TextBold>{followers}</TextBold>
            </li>
            <li>
              <Paragrafos>Following</Paragrafos>
              <TextBold>{following}</TextBold>
            </li>
          </InfosUser>
        </BoxDark>
    )
}