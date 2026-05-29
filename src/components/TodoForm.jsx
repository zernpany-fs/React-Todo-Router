import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { createTodo } from "../api/todo";

export default function TodoForm() {
  const [title, setTitle] = useState("");

  const queryClient = useQueryClient();

  const create = useMutation({
    mutationFn: createTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ["todos"],
      }),
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;

    create.mutate({ title });
    navigate("/");
  };

  return (
    <form
      action=""
      className="flex flex-col justify-between gap-4 border rounded-lg border-gray-500 p-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="outline-none border rounded-lg px-3 py-1.5"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="flex justify-between gap-2">
        <button
          className="border py-2 rounded-lg bg-blue-400 px-4 w-full disabled:opacity-50"
          disabled={title.trim() === ""}
        >
          Save
        </button>
        <Link
          to="/"
          className="text-center border py-2 rounded-lg bg-gray-400 px-4 w-full"
        >
          Cancel
        </Link>
      </div>
    </form>
  );
}
