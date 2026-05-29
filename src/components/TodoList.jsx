import { getTodos } from "../api/todo";
import TodoItem from "./TodoItem";
import { useTodos } from "../hooks/useTodo";

getTodos().then((data) => console.log(data));

export default function TodoList() {
  const { data: todos, isLoading, isError } = useTodos();

  if (isLoading)
    return <p className="text-center text-blue-400 text-5xl">Loading...😵‍💫</p>;
  if (isError)
    return (
      <p className="text-center text-red-400 text-5xl">
        Something went wrong...😑
      </p>
    );
  if (todos.length === 0)
    return (
      <p className="text-center text-blue-400 text-5xl">No Data Found...😂</p>
    );

  return (
    <ul className="space-y-1.5">
      {" "}
      {todos.map((t) => (
        <TodoItem key={t.id} {...t} />
      ))}{" "}
    </ul>
  );
}
