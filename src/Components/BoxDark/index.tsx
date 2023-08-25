import { dados } from 'context/ApiContext';
import styled from 'styled-components';
import { Paragrafos, TextBold, Box } from "UI";
import { bg } from 'UI/variables';

const BoxDark = styled(Box)`
  background-color: ${bg};
  padding: 1rem 2rem;
  width: 100%;
`;

const InfosUser = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default () => {

  const { repos, followers, following } = dados();

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