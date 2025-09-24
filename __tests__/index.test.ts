import { add, subtract, multiply, divide } from "../src/index";

describe("Math functions", () => {
  test("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("subtracts two numbers", () => {
    expect(subtract(10, 4)).toBe(6);
    expect(subtract(0, 5)).toBe(-5);
  });

  test("multiplies two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
    expect(divide(9, 3)).toBe(3);
  });

  test("division by zero throws error", () => {
    expect(() => divide(5, 0)).toThrow("Cannot divide by zero");
  });
});
