import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleComplete, updateTodo } from "./TodoSlice";
import {AiOutlineRight} from 'react-icons/ai';
import { Link } from "react-router-dom";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editStates, setEditStates] = useState({});
  const [editedText, setEditedText] = useState("");

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleToggleComplete = (id) => {
    if (!editStates[id]?.isEditing) {
      dispatch(toggleComplete(id));
    }
  };

  const handleEditTodo = (id, text) => {
    setEditStates((prevEditStates) => ({
      ...prevEditStates,
      [id]: { isEditing: true },
    }));
    setEditedText(text);
  };

  const handleUpdateTodo = (id) => {
    if (editedText.trim() !== "") {
      dispatch(updateTodo({ id, newText: editedText }));
      setEditStates((prevEditStates) => ({
        ...prevEditStates,
        [id]: { isEditing: false },
      }));
      setEditedText("");
    }
  };

  const handleEditInputChange = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <div className="">
      <ul>
        <div className="px-4 py-2 w-[405px] bg-transparent text-white flex-grow whitespace-normal">
          {todos.map((todo) => (
            <li
              className="flex justify-between items-center mx-auto my-4 text-white bg-gradient-to-r from-blue-500 to-purple-700 p-4 rounded-md w-11/12"
              key={todo.id}
              style={{ cursor: "pointer" }}
            >
              <div
                className={`flex items-center w-3/4 ${
                  todo.completed ? "line-through opacity-40" : ""
                }`}
                onClick={() => {
                  if (!editStates[todo.id]?.isEditing) {
                    handleToggleComplete(todo.id);
                  }
                }}
              >
                {editStates[todo.id]?.isEditing ? (
                  <input
                    type="text"
                    value={editedText}
                    onChange={handleEditInputChange}
                    className="px-4 py-2 rounded-l-md outline-none w-full bg-transparent text-white"
                  />
                ) : (
                  todo.text
                )}
              </div>
              <div className="flex flex-row space-x-2">
                <button
                  className="px-3 py-1 bg-red-500 rounded-md text-white"
                  onClick={() => handleDeleteTodo(todo.id)}
                >
                  Delete
                </button>
                <button
                  className={`px-3 py-1 bg-blue-500 rounded-md text-white ${
                    editStates[todo.id]?.isEditing ? "bg-green-500" : ""
                  }`}
                  onClick={() => {
                    if (editStates[todo.id]?.isEditing) {
                      handleUpdateTodo(todo.id);
                    } else {
                      handleEditTodo(todo.id, todo.text);
                    }
                  }}
                >
                  {editStates[todo.id]?.isEditing ? "Save" : "Edit"}
                </button>
                <button>
                  <Link to={`/details/${todo.id}`}>
                  <AiOutlineRight/>
                  </Link>
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
