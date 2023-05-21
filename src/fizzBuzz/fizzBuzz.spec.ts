import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuz", () => {
  it("should return an array of correct size", () => {
    const result = fizzBuzz(1, 5)

    expect(result.length).toEqual(5 - 1)
  });
});
