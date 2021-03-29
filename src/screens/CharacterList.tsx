import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { DataView } from "../components/DataView";
import { Loading } from "../components/Loading";
import { Character } from "../types/character";
import media from "../utils/media";

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
        location {
          dimension
        }
      }
    }
  }
`;

const CharacterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;
`;

const Photo = styled.img`
  border: 8px solid #000;
  border-radius: 18px;
  width: 240px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 24px;
  padding: 8px 0px;
`;

const renderCharacter = ({ image, name, location }: Character) => (
  <CharacterWrapper>
    <Photo src={image} alt={name} />
    <Title>{name}</Title>
    {location.dimension && <div>From: {location.dimension}</div>}
  </CharacterWrapper>
);

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop`
    display: grid;
    grid-template-columns: 33% 33% 33%;
    /* grid-gap: 36px; */
  `}
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
          wrapper={ListWrapper}
          data={characters}
          limit={9}
          onLoadMore={handleNextPage}
          total={total}
          render={renderCharacter}
        />
      )}
    </div>
  );
};
