import { it, expect, describe, vi, beforeEach } from "vitest";
import { getDoubleValue, fetchDoubleApiUser } from "./helper";
import { getUserVal } from "./user";

//  控制间接输入的值
//  替换掉真实的逻辑实现
vi.mock("./user", async (importOrigin) => {
  //  下面两种是相同的
  // const actual = await importOrigin();
  const actual: any = await vi.importActual("./user");
  return {
    ...actual,
    getUserVal: () => 20,
    fetchApiUser: () => Promise.resolve(30),
  };
});

// //  可以发现这里还是10，因为mock是在编译的时候提升到了顶部（即import的那部分）
// console.log(getUserVal());

describe("stub", () => {
  // beforeEach(() => {
  //   vi.doMock("./user", () => {
  //     return {
  //       getUserVal: () => 20,
  //     };
  //   });
  // });
  it("v1", async () => {
    // const { getDoubleValue } = await import("./helper");

    //  given
    // vi.mocked(getUserVal).mockReturnValue(5);
    // console.log("mocked===", getUserVal());

    //  when
    // expect(getDoubleValue()).toBe(40);
    expect(await fetchDoubleApiUser()).toBe(60);

    //  then
  });
});
