import styled from "styled-components/macro";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";

const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: #181818;
`;

const Wrapper = styled.div`
  padding: 22px 96px;
`;

const App = () => {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>Videos Card</Wrapper>
      </Main>
    </Container>
  );
};

export default App;
