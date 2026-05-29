import { getTodos } from "../api/todo";
import TodoItem from "./TodoItem";

getTodos().then((data) => console.log(data));

export default function TodoList() {
  return (
    <ul className="space-y-1.5">
      <TodoItem id={1} title="test1" completed={true} />
      <TodoItem id={2} title="test2" completed={false} />
      <TodoItem id={3} title="test3" completed={false} />
    </ul>
  );
}
