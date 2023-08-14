import { useState } from "react";
import TodoSlice, { addTodo } from "./TodoSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <div>
      <form className="mb-8">
        <div className="flex flex-row justify-center">
          <div>
            <input
              className="px-4 py-2 rounded-l-md border-2 border-purple-600 outline-none w-80 bg-transparent text-white"
              type="text"
              value={text}
              onChange={handleInputChange}
              placeholder="What to do next"
            />
          </div>
          <div>
            <button
              className="todo-button px-4 py-2 border-2 rounded-r-md cursor-pointer outline-none bg-gradient-to-r from-purple-600 to-indigo-900 text-white capitalize border-purple-600"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  
}
export default TodoForm;
