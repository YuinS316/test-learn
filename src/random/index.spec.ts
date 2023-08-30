import { it, expect, describe, vi, beforeEach, afterEach } from "vitest";
import { User, genRandomId, isCrazyThursday } from "./index";

it("should gen letter", () => {
  vi.spyOn(Math, "random").mockImplementation(() => {
    return 0.1;
  });

  const id = genRandomId(2);

  expect(id).toBe("cc");
});

describe("test crazy Thurday", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should crazy", () => {
    vi.setSystemTime(new Date("2023/08/24"));
    const result = isCrazyThursday();

    expect(result).toBe("crazy");
  });

  it("should sad", () => {
    vi.setSystemTime(new Date("2023/08/25"));
    const result = isCrazyThursday();

    expect(result).toBe("sad");
  });
});

describe("test User", () => {
  let user: User;

  beforeEach(() => {
    vi.useFakeTimers();
    user = new User("diu");
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should get id", () => {
    const cb = vi.fn();
    user.fetchData(cb, 10000);
    // vi.advanceTimersToNextTimer();
    vi.advanceTimersByTime(10000);
    expect(cb).toBeCalledWith("Data for user with id: diu");
  });

  it("should get id double", () => {
    const cb = vi.fn();
    const cb2 = vi.fn();
    user.fetchDataV2(cb);
    user.fetchDataV2(cb2);
    vi.runAllTimers();
    expect(cb).toBeCalledWith("Data for user with id: diu");
    expect(cb2).toBeCalledWith("Data for user with id: diu");
  });

  it("should call id", () => {
    const log = vi.spyOn(console, "log");
    user.repeatCallId();
    vi.advanceTimersToNextTimer();
    expect(log).toBeCalledWith("diu");
  });

  it("should resolve id", async () => {
    const id = await user.resolveData();
    expect(id).toBe("diu");
  });

  it("should resolve id with timer", async () => {
    const id = user.resolveData();
    vi.advanceTimersToNextTimer();
    expect(id).resolves.toBe("diu");
  });

  it("should resolve id then and then", async () => {
    vi.useRealTimers();
    user.resoloveDataRepeat();

    await (function () {
      return new Promise((resolve) => {
        setTimeout(resolve);
      });
    })();

    expect(user.id).toBe("3");
  });

  it.only("should success", () => {
    const fn = vi.fn();
    class A {
      run() {
        fn();
        return this;
      }

      call() {}
    }

    new A().run().call();

    expect(fn).toBeCalled();
  });
});
