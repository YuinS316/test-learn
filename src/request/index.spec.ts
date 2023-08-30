import {
  it,
  expect,
  describe,
  vi,
  beforeEach,
  beforeAll,
  afterAll,
  afterEach,
} from "vitest";
import { TodoItem, TodoList } from "./index";
import axios from "axios";
import { rest } from "msw";
import { server } from "./mock";
import { serverAddTodo } from "./api";

describe("mock axios", () => {
  let todoList: TodoList;

  vi.mock("axios");

  beforeEach(() => {
    todoList = new TodoList();
  });

  it("mock axios", async () => {
    vi.mocked(axios.post).mockImplementation((path, body: any, config) => {
      return Promise.resolve({
        data: {
          id: "0",
          title: body.title,
          status: "active",
        },
      });
    });

    await todoList.addTodo("dinner");
    expect(todoList.list.length).toBe(1);
    expect(todoList.list[0]).toEqual({
      id: "0",
      title: "dinner",
      status: "active",
    });
  });
});

describe("mock midlle", () => {
  let todoList: TodoList;

  vi.mock("./api");

  beforeEach(() => {
    todoList = new TodoList();
  });

  it("mock middle function", async () => {
    vi.mocked(serverAddTodo).mockImplementation((title) => {
      return Promise.resolve({
        id: "0",
        title: title,
        status: "active",
      });
    });

    await todoList.addTodo("dinner");
    expect(todoList.list.length).toBe(1);
    expect(todoList.list[0]).toEqual({
      id: "0",
      title: "dinner",
      status: "active",
    });
  });
});

describe("mock server worker", () => {
  // setup mock server

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  // setup todo list

  let todoList: TodoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it("msw", async () => {
    server.use(
      rest.post("http://localhost/api/addToDo", async (req, res, context) => {
        const { title } = await req.json();
        console.log("title===", title);
        return res(
          context.json({
            id: "0",
            title,
            status: "active",
          })
        );
      })
    );

    await todoList.addTodo("dinner");
    expect(todoList.list.length).toBe(1);
    expect(todoList.list[0]).toEqual({
      id: "0",
      title: "dinner",
      status: "active",
    });
  });
});
