import { describe, expect, it } from "vitest";

describe("expect group", () => {
  it("should be 2", () => {
    expect(2).toBe(2);
  });
  //  对象的时候
  it("should euqal", () => {
    const obj = { a: 1 };
    expect(obj).not.toBe({ a: 1 });

    expect(obj).toEqual({ a: 1 });
  });
  it("should truthy", () => {
    expect(1).toBeTruthy();

    expect(true).toBeTruthy();
    expect("a").toBeTruthy();
  });
  it("should falsy", () => {
    expect(0).toBeFalsy();
    expect(false).toBeFalsy();
    expect("").toBeFalsy();
  });
  it("should contain", () => {
    const arr = [1, 3, { a: 1 }];
    expect(arr).toContain(1);
    expect(arr).toContain(arr[2]);
  });
  it("should catch throw", () => {
    const fn = () => {
      throw new Error("err");
    };
    expect(() => fn()).toThrow("err");
  });
});
