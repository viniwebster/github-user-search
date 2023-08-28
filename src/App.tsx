import Button from "Components/Button";
import InputText from "Components/InputText";
import Toggle from "Components/Toggle";
import GlobalStyles from "UI/GlobalStyles";
import styled from "styled-components";
import { txtHighContrast } from "UI/variables";
import { Container } from "UI";
import Box from "Components/Box";
import ApiProvider from "context/ApiContext";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Logo = styled.h1`
  color: ${txtHighContrast};
  font-weight: 700;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function App() {
  return (
    <Container>
      <GlobalStyles />
      <Header>
        <Logo>devfinder</Logo>
        <Toggle />
      </Header>
      <Main>
        <ApiProvider>
          <InputText />
          <Box />
        </ApiProvider>
      </Main>
    </Container>
  );
}

export default App;
