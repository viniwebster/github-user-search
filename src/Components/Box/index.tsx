import IconProfile from "Components/IconProfile";
import Socials from "Components/Socials";
import styled from "styled-components";
import { Box, Paragrafos } from "UI";
import { primary } from "UI/variables";
import { TextBold } from "UI";
import BoxDark from "Components/BoxDark";
import { dados } from "context/ApiContext";

const BoxInfos = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 500px;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

const InfosProfile = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: start;
  width: 100%;
`;

const User = styled.h3`
  color: ${primary};
  @media screen and (max-width: 500px){
    font-size: 14px;
  }
`;

const DivInfos = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const InfosContainer = styled(InfosProfile)`
  width: 80%;
  flex-direction: column;
  @media screen and (max-width: 768px){
    width: 100%;
  }
`

export default () => {

  const { name, description, createAt, user } = dados();

  const data = createAt.split('-');
  
  return (
    <BoxInfos>
      <Profile>
        <InfosProfile>
          <IconProfile />
          <Infos>
            <div>
              <TextBold>{name}</TextBold>
              <User>@{user}</User>
            </div>
            <Paragrafos>Joined {data[1]} {data[0]}</Paragrafos>
          </Infos>
        </InfosProfile>
        <DivInfos>
          <InfosContainer>
          <Paragrafos>
              {description ? description : 'This profile has no bio'}
          </Paragrafos>
            <BoxDark />
            <Socials />
          </InfosContainer>
        </DivInfos>
      </Profile>
    </BoxInfos>
  );
};
