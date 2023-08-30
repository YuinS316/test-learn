import { test, it, expect, describe } from "vitest";

//  测试套件 test suit
//  可以嵌套包裹
describe.only("Name of the group", () => {
  //  来源于tdd
  test("test work", () => {
    expect(1).toBe(1);
  });

  //  来自于bdd -> 行为驱动
  //  它应该xxx
  it("should it work", () => {
    expect(1).toBe(1);
  });
});
