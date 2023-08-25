import styled from "styled-components";
import { BsLink45Deg, BsTwitter } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { GoOrganization } from "react-icons/go";
import { txtHighContrast } from "UI/variables";
import { dados } from "context/ApiContext";

const Socials = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

interface PropsSocialsIcons {
  notFould?: string | number | null;
}

const SocialsIcons = styled.div<PropsSocialsIcons>`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ notFould }) =>
    notFould
      ? "hsl(0, 2.14592274678112%, 54.313725490196084%)"
      : txtHighContrast};
  cursor: ${({ notFould }) => (notFould ? "default" : "pointer")};
  a {
    color: ${({ notFould }) =>
      notFould
        ? "hsl(0, 2.14592274678112%, 54.313725490196084%)"
        : txtHighContrast};
  }
`;

export default () => {
  const { twitter, company, location, blog } = dados();
  
  return (
    <Socials>
      <SocialsIcons notFould={location === null ? "black" : ""}>
        <IoLocationOutline size={25} />
        {location ? location : "Not Available"}
      </SocialsIcons>
      <SocialsIcons notFould={twitter === null ? "black" : ""}>
        <BsTwitter size={25} />
        <a
          href={twitter ? `https://www.twitter.com/${twitter}` : undefined}
          target="_blank"
        >
          {twitter ? `@${twitter}` : "Not Available"}
        </a>
      </SocialsIcons>
      <SocialsIcons notFould={blog === "" ? "black" : ""}>
        <BsLink45Deg size={25} />
        <a href={blog ? blog : undefined} target="_blank">
          {blog ? blog : "Not Available"}
        </a>
      </SocialsIcons>
      <SocialsIcons notFould={company === null ? "black" : ""}>
        <GoOrganization size={25} />
        {company ? company : "Not Available"}
      </SocialsIcons>
    </Socials>
  );
};
