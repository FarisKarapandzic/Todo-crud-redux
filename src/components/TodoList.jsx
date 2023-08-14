import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleComplete } from "./TodoSlice";
function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleToggleComplete = (index) => {
    dispatch(toggleComplete(index));
  };
  


  return (
    <div className="">
      <ul>
        <div className="px-4 py-2  w-[405px] bg-transparent text-white flex-grow whitespace-normal">
          {todos.map((todo, index) => (
            <li
              className= 'flex justify-between items-center mx-auto my-4 text-white bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded-md w-11/12'
              key={index}
              style={{ cursor: "pointer" }}
            >
              <div
                className={`flex items-center w-3/4 ${
                  todo.completed ? "line-through opacity-40" : ""
                }`}
                onClick={() => handleToggleComplete(index)}
              >
                {todo.text}
              </div>
              <div className="flex flex-row space-x-2">
                <button
                  className="px-3 py-1 bg-red-500 rounded-md text-white"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </button>
                <button className="px-3 py-1 bg-blue-500 rounded-md text-white">
                  Edit
                </button>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
