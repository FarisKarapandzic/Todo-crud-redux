import { useState } from "react";
import TodoSlice, { addTodo } from "./TodoSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo({text: text, description: description}));
    setText("");
    setDescription("");
  };

  return (
    <div>
      <form className="mb-8">
        <div className="flex flex-col space-y-2">
          <input
            className="px-4 py-2 rounded-l-md border-2 border-purple-600 outline-none w-80 bg-transparent text-white"
            type="text"
            value={text}
            onChange={handleInputChange}
            placeholder="Task Title"
          />
          <textarea
            className="px-4 py-2 rounded-l-md border-2 border-purple-600 outline-none w-80 h-32 bg-transparent text-white"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Task Description"
            
          ></textarea>
          <button
            className="todo-button px-4 py-2 border-2 rounded-md cursor-pointer outline-none bg-gradient-to-r from-purple-600 to-indigo-900 text-white capitalize border-purple-600"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
  
}
export default TodoForm;
