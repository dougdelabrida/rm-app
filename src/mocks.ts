import { GET_CHARACTERS } from "./screens/CharacterList";

export const charactersMock = [
  {
    request: {
      query: GET_CHARACTERS,
      variables: {
        page: 0,
      },
    },
    result: {
      data: {
        characters: {
          results: [
            { id: "1", name: "Rick Sanchez", __typename: "Character" },
            { id: "2", name: "Morty Smith", __typename: "Character" },
            { id: "3", name: "Summer Smith", __typename: "Character" },
          ],
          __typename: "Characters",
        },
      },
    },
  },
];
