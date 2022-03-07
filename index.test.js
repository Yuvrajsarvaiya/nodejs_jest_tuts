const { sum } = require(".");
const { forEach, map } = require("./arrayMethods");

describe("example tests", () => {
  test("adding 1+2 must return 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("check object equality", () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    expect(obj1).toEqual(obj2);
  });

  test("check numbers related test", () => {
    expect(2 + 2).toBe(4);
    expect(15 + 4).toBeGreaterThan(18);
    expect(15 + 15).toBeLessThanOrEqual(30);
    expect(40).toBeGreaterThanOrEqual(18);
  });
});

describe("testing forEach method", () => {
  let mockCallback;
  beforeEach(() => {
    mockCallback = jest.fn((value) => value * 2);
  });
  test("check if forEach accepts only array", () => {
    expect(mockCallback).toBeDefined();
    expect(() => forEach(1, mockCallback)).toThrow(Error);
    expect(() => forEach({}, mockCallback)).toThrow(Error);
    expect(() => forEach(false, mockCallback)).toThrow(Error);
    expect(() => forEach(null, mockCallback)).toThrow(Error);
    expect(() => forEach([], mockCallback)).not.toThrow(Error);
  });

  test("test if callback function works as expected", () => {
    expect(mockCallback).toBeDefined();
    forEach([1, 2], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(1);
    expect(mockCallback.mock.calls[1][0]).toBe(2);
    expect(mockCallback.mock.results[0].value).toBe(2);
    expect(mockCallback.mock.results[1].value).toBe(4);
  });
});

describe("Testing map method", () => {
  let mockCallback;
  beforeEach(() => {
    mockCallback = jest.fn((value) => value * value);
  });
  test("check if map accepts only array and callback function", () => {
    expect(mockCallback).toBeDefined();
    expect(() => map(1, mockCallback)).toThrow("only arrays are allowed");
    mockCallback = 3;
    expect(() => map([1, 3], mockCallback)).toThrow(
      "callback must be function"
    );
  });

  test("check map function works as expected", () => {
    expect(mockCallback).toBeDefined();
    map([10, 20, 30], mockCallback);
    expect(mockCallback).toHaveBeenCalledTimes(3);
    expect(mockCallback.mock.calls[0][0]).toBe(10);
    expect(mockCallback.mock.calls[1][0]).toBe(20);
    expect(mockCallback.mock.calls[2][0]).toBe(30);

    expect(mockCallback).toHaveReturnedWith(100, 400, 900);
  });
});
