import { GET_CHARACTERS } from "./screens/CharacterList";

export const charactersMock = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        page: 1,
      },
    },
    result: {
      data: {
        characters: {
          info: {
            __typename: "Info",
            count: 671,
          },
          results: [
            {
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              __typename: "Character",
              status: "Alive",
            },
            {
              id: "2",
              name: "Morty Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              __typename: "Character",
              status: "Alive",
            },
            {
              id: "3",
              name: "Summer Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
              __typename: "Character",
              status: "Alive",
            },
          ],
          __typename: "Characters",
        },
      },
    },
  },
];
