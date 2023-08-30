import styled from "styled-components";
import { BsLink45Deg, BsTwitter } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { GoOrganization } from "react-icons/go";
import { Dados } from "context/ApiContext";

interface PropsSocialsIcons {
  notFould?: string | number | null;
}

const Socials = styled.section`
  display: grid;
  gap: 1rem;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    word-break: break-all;
    font-size: 14px;
  }
`;

const SocialsIcons = styled.div<PropsSocialsIcons>`
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.text};
  cursor: ${({ notFould }) => (notFould ? "default" : "pointer")};
  a {
    color: ${({ theme }) => theme.text};
  }
`;

export default () => {
  const { twitter, company, location, blog } = Dados();

  return (
    <Socials>
      <SocialsIcons notFould={location === null ? 1 : 0}>
        <IoLocationOutline size={25} />
        {location ? location : "Not Available"}
      </SocialsIcons>
      <SocialsIcons notFould={twitter === null ? 1 : 0}>
        <BsTwitter size={25} />
        <a
          href={twitter ? `https://www.twitter.com/${twitter}` : undefined}
          target="_blank"
          rel="noreferrer"
        >
          {twitter ? `@${twitter}` : "Not Available"}
        </a>
      </SocialsIcons>
      <SocialsIcons notFould={blog === "" ? 1 : 0}>
        <BsLink45Deg size={25} />
        <a href={blog ? blog : undefined} target="_blank" rel="noreferrer">
          {blog ? blog : "Not Available"}
        </a>
      </SocialsIcons>
      <SocialsIcons notFould={company === null ? 1 : 0}>
        <GoOrganization size={25} />
        {company ? company : "Not Available"}
      </SocialsIcons>
    </Socials>
  );
};
