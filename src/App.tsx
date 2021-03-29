import { ApolloProvider } from "@apollo/client";
import styled from "styled-components";
import client from "./api/graphql";
import { CharacterList } from "./screens/CharacterList";

const AppWrapper = styled.div`
  padding: 24px 0;
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <AppWrapper>
        <CharacterList />
      </AppWrapper>
    </ApolloProvider>
  );
}

export default App;
