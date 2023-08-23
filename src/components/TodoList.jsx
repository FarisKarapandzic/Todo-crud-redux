import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodos, toggleComplete, updateTodo } from "./TodoSlice";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGetTodosQuery } from "../api/api";
import { useSelector } from "react-redux/es/hooks/useSelector";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const { data: fetchedTodos, isLoading } = useGetTodosQuery();
  const [editStates, setEditStates] = useState({});
  const [editedText, setEditedText] = useState({});
  useEffect(() => {
    if (fetchedTodos && todos.length === 0) {
      dispatch(setTodos(fetchedTodos));
    }
  }, [fetchedTodos, todos, dispatch]);

  const handleToggleComplete = (id) => {
    if (!editStates[id]?.isEditing) {
      dispatch(toggleComplete(id));
      console.log("click");
    }
  };

  const handleEditTodo = (id, text) => {
    setEditStates((prevEditStates) => ({
      ...prevEditStates,
      [id]: { isEditing: true },
    }));
    setEditedText((prevEditedText) => ({
      ...prevEditedText,
      [id]: text,
    }));
  };

  const handleUpdateTodo = (id) => {
    if (editedText[id]?.trim() !== "") {
      dispatch(updateTodo({ id, newText: editedText[id] }));
      setEditStates((prevEditStates) => ({
        ...prevEditStates,
        [id]: { isEditing: false },
      }));
      setEditedText((prevEditedText) => ({
        ...prevEditedText,
        [id]: "", // Reset the edited text after saving
      }));
    }
  };

  const handleEditInputChange = (event, id) => {
    const newValue = event.target.value;
    setEditedText((prevEditedText) => ({
      ...prevEditedText,
      [id]: newValue,
    }));
  };
  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  if (isLoading || fetchedTodos === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <div className="">
      <ul>
        <div className="px-4 py-2 w-[405px] bg-transparent text-white flex-grow whitespace-normal">
          {todos?.map((todo) => (
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
                    value={editedText[todo.id] || ""}
                    onChange={(e) => handleEditInputChange(e, todo.id)}
                    className="px-4 py-2 rounded-l-md outline-none w-full bg-transparent text-white"
                  />
                ) : (
                  todo.title
                )}
              </div>
              <div className="flex flex-row space-x-2">
                <button
                  className="px-3 py-1 bg-red-500 rounded-md text-white"
                  onClick={() => handleDeleteTodo(todo.id)} // Call the delete function
                >
                  Delete
                </button>
                <button
                  className={`px-3 py-1 bg-blue-500 rounded-md text-white ${
                    editStates[todo.id]?.isEditing ? "bg-green-500" : ""
                  }`}
                  onClick={() => {
                    if (editStates[todo.id]?.isEditing) {
                      
                      handleUpdateTodo(todo.id); // Call the update function
                    } else {
                      handleEditTodo(todo.id, todo.title);
        
                    }
                  }}
                >
                  {editStates[todo.id]?.isEditing ? "Save" : "Edit"}
                </button>
                <button>
                  <Link to={`/details/${todo.id}`}>
                    <AiOutlineRight />
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
