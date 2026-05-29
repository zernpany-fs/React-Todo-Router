import { api } from "./client";

export async function getTodos() {
  //   throw new Error();
  //   return new Promise((r) => setTimeout(() => r([]), 5000));
  const { data } = await api.get("/todos");
  return data;
}

export async function createTodo(newTodo) {
  const { data } = await api.post("/todos", newTodo);
  return data;
}
