import { getPagesFrom } from "../utils";

test("getPagesFrom returns the proper response", () => {
  const arr = ["a", "b", "c", "d", "e", "f", "g"];
  const response = getPagesFrom(arr, 2);
  expect(response[0][0]).toEqual("a");
  expect(response[0][1]).toEqual("b");
  expect(response[0][2]).toEqual(undefined);
  expect(response[3][0]).toEqual("g");
  expect(response[3][1]).toEqual(undefined);
});
