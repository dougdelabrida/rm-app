import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { CharacterList } from "../CharacterList";
import { charactersMock } from "../../mocks";

describe("<CharacterList />", () => {
  test("should render a list of names", async () => {
    render(
      <MockedProvider mocks={charactersMock} addTypename={false}>
        <CharacterList />
      </MockedProvider>
    );

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));

    const rick = await screen.findByText("Rick Sanchez");
    const morty = await screen.findByText("Morty Smith");
    const summer = await screen.findByText("Summer Smith");

    expect(rick).toBeInTheDocument();
    expect(morty).toBeInTheDocument();
    expect(summer).toBeInTheDocument();
  });
});
