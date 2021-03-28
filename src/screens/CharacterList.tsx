import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Character } from "../types/character";

export const GET_CHARACTERS = gql`
  query Character($page: Int!) {
    characters(page: $page) {
      results {
        id
        name
      }
    }
  }
`;

export const CharacterList = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: {
      page: 0,
    },
  });

  if (error) return <span>error screen</span>;
  if (loading) return <span>loading screen</span>;

  const characters: Character[] = data?.characters?.results || [];

  return (
    <div>
      {characters.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </div>
  );
};
