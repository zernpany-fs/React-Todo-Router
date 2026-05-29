import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todo";
import TodoItem from "./TodoItem";

getTodos().then((data) => console.log(data));

export default function TodoList() {
  const {
    data: todos,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["todos"], //! catching data
    queryFn: getTodos, //! which function fetch array, [todo object]
    //! cache ==> { "todos" name key : "fetch" data from server} and only work once if there is identical name, no more fetching
  });

  if (isLoading)
    return <p className="text-center text-blue-400">Loading...🤑</p>;
  if (isError)
    return (
      <p className="text-center text-red-400">Somethign went wrong...😑</p>
    );

  return (
    <ul className="space-y-1.5">
      {" "}
      {todos.map((t) => (
        <TodoItem key={t.id} {...t} />
      ))}{" "}
    </ul>
    // <ul className="space-y-1.5">
    //   <TodoItem id={1} title="test1" completed={true} />
    //   <TodoItem id={2} title="test2" completed={false} />
    //   <TodoItem id={3} title="test3" completed={false} />
    // </ul>
  );
}
