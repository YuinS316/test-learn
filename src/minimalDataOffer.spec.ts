import { it, expect, describe } from "vitest";

class User {
  constructor(
    public name: string,
    public age: number,
    public address: string
  ) {}

  callName() {
    return `My name is ${this.name}`;
  }
}

function createUser(name: string) {
  return new User(name, 18, "China");
}

class NewUser {
  constructor(
    public name: string = "",
    public age: number = 0,
    public address: string = ""
  ) {}

  callName() {
    return `My name is ${this.name}`;
  }
}

describe("最小测试数据", () => {
  it("why", () => {
    //  这里我想测试的是 User.name，但是我却需要填入age和address
    const u = new User("alen", 18, "China");
    expect(u.callName()).toBe(`My name is alen`);
  });

  it("v1", () => {
    //  我们可以通过修改一下class的方式，只传入必须得值，比如name
    //  那这种情况不是会破坏业务代码吗？答案确实是，但是反过来思考
    //  在单元测试中，我们是处于使用者的一方，简化输入可以设计出更加合理的api
    const u = new NewUser("alen");
    expect(u.callName()).toBe(`My name is alen`);
  });

  it("v2", () => {
    //  同理，我们可以通过工厂函数的形式去创建
    const u = createUser("alen");
    expect(u.callName()).toBe(`My name is alen`);
  });

  it("v3", () => {
    //  另一种方式是通过虚拟对象的方式
    const u = {
      name: "alen",
      callName() {
        return `My name is ${this.name}`;
      },
    } as User;

    expect(u.callName()).toBe(`My name is alen`);
  });
});
