import IconProfile from "Components/IconProfile";
import styled from "styled-components";
import { Box } from "UI";
import { txtHighContrast, txtMidContrast, primary, bg } from "UI/variables";
import { BsLink45Deg, BsTwitter } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { GoOrganization } from "react-icons/go";

const BoxInfos = styled(Box)`
  display: flex;
  gap: 2rem;
  min-height: 500px;
`;

const BoxDark = styled(Box)`
  background-color: ${bg};
  padding: 1rem 2rem;
`;

const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
`;

const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
`;

const TextBold = styled.h2`
  font-weight: 700;
  font-size: 24px;
  color: ${txtHighContrast};
`;

const User = styled.h3`
  color: ${primary};
`;

const Paragrafos = styled.p`
  color: ${txtMidContrast};
`;

const InfosUser = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Socials = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
`;

const SocialsIcons = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${txtHighContrast};
`;

export default () => {
  return (
    <BoxInfos>
      <IconProfile />
      <InfosContainer>
        <Infos>
          <div>
            <TextBold>Vinicius Webster</TextBold>
            <User>@viniwebster</User>
          </div>
          <Paragrafos>Joined 01 jan 2023</Paragrafos>
        </Infos>
        <Paragrafos>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          nesciunt repellat iste dolor perferendis!
        </Paragrafos>
        <BoxDark>
          <InfosUser>
            <li>
              <Paragrafos>Repos</Paragrafos>
              <TextBold>8</TextBold>
            </li>
            <li>
              <Paragrafos>Followers</Paragrafos>
              <TextBold>1000</TextBold>
            </li>
            <li>
              <Paragrafos>Following</Paragrafos>
              <TextBold>8000</TextBold>
            </li>
          </InfosUser>
        </BoxDark>
        <Socials>
          <SocialsIcons>
            <IoLocationOutline size={25} />
            Brazil
          </SocialsIcons>
          <SocialsIcons>
            <BsTwitter size={25} />
            @vimico
          </SocialsIcons>
          <SocialsIcons>
            <BsLink45Deg size={25} />
            https://github.com
          </SocialsIcons>
          <SocialsIcons>
            <GoOrganization size={25} />
            @amazon
          </SocialsIcons>
        </Socials>
      </InfosContainer>
    </BoxInfos>
  );
};
