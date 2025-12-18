import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";
import { useState } from "react";

const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handelFormSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        content: input,
        isCompleted: false,
      },
    ]);
    setInput("");
  };

  const handelDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const isCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo,
      ),
    );
  };

  return (
    <div className="h-96 w-sm rounded-2xl bg-white shadow-2xs">
      <div className="flex items-center gap-2 p-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 stroke-indigo-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
        <h1 className="text-lg font-bold text-indigo-500">TODO </h1>
      </div>

      <TodoInput
        input={input}
        setInput={setInput}
        handelFormSubmit={handelFormSubmit}
      />

      <div className="mt-6 px-4">
        <TodoItem
          todos={todos}
          handelDelete={handelDelete}
          isCompleted={isCompleted}
        />
      </div>
    </div>
  );
};

export default Todo;
