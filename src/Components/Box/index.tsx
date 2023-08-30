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
  flex-wrap: wrap;
  gap: 2rem;
  min-height: 500px;
`;

const Profile = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
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
  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export default () => {
  const { name, description, createAt, user } = dados();

  const data = createAt.split("-");

  return (
    <BoxInfos>
      <IconProfile />
      <Profile>
          <Infos>
            <div>
              <TextBold>{name}</TextBold>
              <User>@{user}</User>
            </div>
            <Paragrafos>
              Joined {data[1]} {data[0]}
            </Paragrafos>
          </Infos>
        <Paragrafos>
          {description ? description : "This profile has no bio"}
        </Paragrafos>
        <BoxDark />
        <Socials />
      </Profile>
    </BoxInfos>
  );
};
