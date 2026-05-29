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

export async function deleteTodo(id) {
  const { data } = await api.delete(`/todos/${id}`);
  return data;
}

//! {id, title?, object?}
export async function updateTodo({ id, ...body }) {
  const { data } = await api.patch(`/todos/${id}`, body);
  return data;
}
