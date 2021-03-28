import { ApolloProvider } from "@apollo/client";
import client from "./api/graphql";
import { CharacterList } from "./screens/CharacterList";

function App() {
  return (
    <ApolloProvider client={client}>
      <h1>Get Schwifty</h1>
      <CharacterList />
    </ApolloProvider>
  );
}

export default App;
