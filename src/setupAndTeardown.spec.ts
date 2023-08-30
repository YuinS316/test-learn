import {
  test,
  beforeAll,
  beforeEach,
  afterAll,
  afterEach,
  expect,
} from "vitest";

beforeAll(() => {
  console.log("before all");

  //  相当于after all
  return () => {
    console.log("after all come from before all");
  };
});
beforeEach(() => {
  console.log("before each");
  return () => {
    console.log("after each come from beore each");
  };
});
test("test", () => {
  console.log("test!");
  expect([]).toBeTruthy();
});
afterAll(() => {
  console.log("after all");
});
afterEach(() => {
  console.log("after each");
});
