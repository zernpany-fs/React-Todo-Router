export default function TodoForm() {
  return (
    <form
      action=""
      className="flex flex-col justify-between gap-4 border rounded-lg border-gray-500 p-4"
    >
      <input
        type="text"
        className="outline-none border rounded-lg px-3 py-1.5"
      />
      <div className="flex justify-between gap-2">
        <button className="border py-2 rounded-lg bg-blue-400 px-4 w-full">
          Save
        </button>
        <button className="border py-2 rounded-lg bg-gray-400 px-4 w-full">
          Cancel
        </button>
      </div>
    </form>
  );
}
