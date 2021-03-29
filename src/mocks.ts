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
            count: 671,
          },
          results: [
            {
              id: "1",
              name: "Rick Sanchez",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              location: {
                dimension: "Replacement Dimension",
              },
            },
            {
              id: "2",
              name: "Morty Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              location: {
                dimension: "Replacement Dimension",
              },
            },
            {
              id: "3",
              name: "Summer Smith",
              image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
              location: {
                dimension: "Replacement Dimension",
              },
            },
          ],
        },
      },
    },
  },
];
