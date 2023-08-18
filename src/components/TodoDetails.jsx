import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";

function TodoDetails() {
  const { id } = useParams();
  const todoId = parseInt(id, 10);
  const todo = useSelector((state) => state.todos.find((todo) => todo.id === todoId));

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <div className="px-4 py-8 flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg p-6 shadow-md w-1/2">
        <h2 className="text-2xl font-semibold mb-4">{todo.title}</h2>
        <p className={`mb-2 ${todo.completed ? "line-through" : ""}`}>
          Completion Status: {todo.completed ? "Completed" : "Not Completed"}
        </p>
        <p className="mb-4">Description: {todo.description}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => window.history.back()}
        >
          <AiOutlineArrowLeft className="mr-1" />
          Go Back
        </button>
      </div>
    </div>
  );
}

export default TodoDetails;
