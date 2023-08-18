import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoDetails from "./components/TodoDetails";
import { Routes, Route } from "react-router-dom";
import Form from "./Form";
function App() {
  return (
    <>
        <Routes>
          <Route path="/details/:id"  element={<TodoDetails/>} />
          <Route path="/" element={<Form/>} />
        </Routes>

    </>
  );
}

export default App;
