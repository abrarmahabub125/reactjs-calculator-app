const TodoInput = ({ input, setInput, handelFormSubmit }) => {
  return (
    <form onSubmit={handelFormSubmit}>
      <div className="relative flex gap-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="absolute top-1/2 left-6 size-5 translate-y-[-50%] stroke-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <input
          className="w-full rounded-md border border-gray-300 px-4 py-2 pl-10 font-medium text-gray-700 outline-0"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add ToDo"
        />
        <button
          type="submit"
          className="hover: cursor-pointer rounded-md bg-indigo-500 px-4 py-2 font-medium text-white transition hover:bg-indigo-600"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
