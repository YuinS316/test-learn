import axios from "axios";
import { serverAddTodo } from "./api";

export interface TodoItem {
  id: string;
  title: string;
  status: string;
}

export class TodoList {
  public list: TodoItem[] = [];

  async addTodo(title: string) {
    // const item = await axios.post<TodoItem>("/api/addToDo", { title });
    // if (item.data) {
    //   this.list.push(item.data);
    // }
    const item = await serverAddTodo(title);

    this.list.push(item);
  }

  async deleteTodo(id: string) {
    await axios.delete(`/api/delete/${id}`);

    const list = await axios.get<TodoItem[]>("/api/query");

    if (list.data) {
      this.list = list.data;
    }
  }
}
