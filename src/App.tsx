import InputText from "Components/InputText";
import Toggle from "Components/Toggle";
import GlobalStyles from "UI/GlobalStyles";
import styled,{ ThemeProvider } from "styled-components";
import { txtHighContrast } from "UI/variables";
import { Container } from "UI";
import Box from "Components/Box";
import ApiProvider from "context/ApiContext";
import { useState } from 'react';
import { LightMode, DarkMode } from "UI/Theme";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.text};
  font-weight: 700;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function App() {

  const [theme, setTheme] = useState<boolean>(false);
  const [iconTheme, setIconTheme] = useState(false)

  function switchTheme() {
    setTheme(!theme);
    setIconTheme(!iconTheme)
  }

  return (
    <ThemeProvider theme={theme ? DarkMode : LightMode}>
      <Container>
        <GlobalStyles />
        <Header>
          <Logo>devfinder</Logo>
          <Toggle switchTheme={switchTheme} iconTheme={iconTheme}/>
        </Header>
        <Main>
          <ApiProvider>
            <InputText />
            <Box />
          </ApiProvider>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
