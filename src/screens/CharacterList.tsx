import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { DataView } from "../components/DataView";
import { Loading } from "../components/Loading";
import { Character } from "../types/character";

export const GET_CHARACTERS = gql`
  query Character($page: Int!) {
    characters(page: $page) {
      info {
        count
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`;

export const CharacterList = () => {
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState<Character[]>([]);
  const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERS, {
    variables: {
      page,
    },
  });

  const handleNextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMore({
      variables: {
        page: nextPage,
      },
    });
  };

  useEffect(() => {
    if (data?.characters?.results) {
      setCharacters((characters) => [
        ...characters,
        ...data?.characters?.results,
      ]);
    }
  }, [data?.characters?.results]);

  const total = data?.characters?.info.count;

  return (
    <div>
      {error && <span>error screen</span>}
      {loading && characters.length === 0 && <Loading />}

      {characters.length > 0 && (
        <DataView
          data={characters}
          limit={10}
          onLoadMore={handleNextPage}
          total={total}
          render={({ image, name, status }) => (
            <>
              <img src={image} alt={name} />
              <div>{name}</div>
              <div>{status}</div>
            </>
          )}
        />
      )}
    </div>
  );
};
