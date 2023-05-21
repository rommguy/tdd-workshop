import { fizzBuzz } from "./fizzBuzz";

describe("fizzBuz", () => {
  it("should return an array of correct size", () => {
    const result = fizzBuzz(1, 5)

    expect(result.length).toEqual(5 - 1)
  });

  it("should return an array of correct size with module 3", () => {
    const result = fizzBuzz(3,4)

    expect(result).toEqual(['fizz'])
  });
});
