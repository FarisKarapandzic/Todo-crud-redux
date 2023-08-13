import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  return (
    <>
      <div class="flex flex-col justify-start items-center w-520 min-h-600 bg-menibox text-center mx-auto my-128 rounded-lg pb-32 mt-5">
        <h1 className="my-8 text-white text-2xl">What's on your mind:</h1>
        <TodoForm/>
        <TodoList/>
      </div>
    </>
  );
}

export default App;
