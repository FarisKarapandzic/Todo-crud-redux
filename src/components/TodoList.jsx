import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleComplete, updateTodo } from "./TodoSlice";
import { useState } from "react";
function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleDeleteTodo = (index) => {
    dispatch(deleteTodo(index));
  };

  const handleToggleComplete = (index) => {
    dispatch(toggleComplete(index));
  };

  const handleEditTodo = (index, text) => {
    setEditId(index);
    setEditedText(text);
  };

  const handleUpdateTodo = (index) => {
    if (editedText.trim() !== "") {
      dispatch(updateTodo({ index, newText: editedText }));
      setEditId(null);
      setEditedText("");
    }
  };

  return (
    <div className="">
      <ul>
        <div className="px-4 py-2  w-[405px] bg-transparent text-white flex-grow whitespace-normal">
          {todos.map((todo, index) => (
            <li
              className="flex justify-between items-center mx-auto my-4 text-white bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded-md w-11/12"
              key={index}
              style={{ cursor: "pointer" }}
            >
              <div
                className={`flex items-center w-3/4 ${
                  todo.completed ? "line-through opacity-40" : ""
                }`}
                onClick={() => {
                  if (editId === null) {
                    handleToggleComplete(index);
                  }
                }}
              >
                {editId === index ? (
                  <input
                    type="text"
                    value={editedText}
                    onChange={(e) => setEditedText(e.target.value)}
                    className="px-4 py-2 rounded-l-md  outline-none w-full bg-transparent text-white"
                  />
                ) : (
                  todo.text
                )}
              </div>
              <div className="flex flex-row space-x-2">
                <button
                  className="px-3 py-1 bg-red-500 rounded-md text-white"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete
                </button>
                <button
                  className={`px-3 py-1 bg-blue-500 rounded-md text-white ${
                    editId === index ? "bg-green-500" : ""
                  }`}
                  onClick={() => {
                    if (editId === index) {
                      handleUpdateTodo(index);
                    } else {
                      handleEditTodo(index, todo.text);
                    }
                  }}
                >
                  {editId === index ? "Save" : "Edit"}
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
