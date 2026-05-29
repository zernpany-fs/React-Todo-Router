import { Link } from "react-router";
import { deleteTodo } from "../api/todo";
import { useDeleteTodo } from "../hooks/useTodo";

// props(not popular anymore) ==> use destructuring {id, title, completed}
export default function TodoItem({ id, title, completed }) {
  const deleteTodo = useDeleteTodo();
  return (
    <li className="flex justify-between items-center border rounded-lg px-4 py-4">
      <div className="space-x-4">
        <input
          type="checkbox"
          className="size-4 accent-blue-300 rounded-lg"
          checked={completed}
        />
        <span className={completed ? "text-red-500 line-through" : undefined}>
          {title}
        </span>
      </div>

      <div className="space-x-6">
        <Link to={`/edit/${id}`} className="text-xl hover:shadow-lg">
          ✏️
        </Link>
        <button
          className="text-xl hover:shadow-lg"
          disabled={deleteTodo.isPending}
          onClick={() => deleteTodo.mutate(id)}
        >
          🗑️
        </button>
      </div>
    </li>
  );
}
