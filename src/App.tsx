import { ApolloProvider } from "@apollo/client";
import client from "./api/graphql";

function App() {
  return (
    <ApolloProvider client={client}>
      <div>just a test</div>;
    </ApolloProvider>
  );
}

export default App;
