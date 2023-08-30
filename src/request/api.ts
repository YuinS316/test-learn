import { TodoItem } from ".";
import axios from "axios";

export function serverAddTodo(title: string) {
  return axios
    .post<TodoItem>("/api/addToDo", { title })
    .then((res) => res.data);
}
