import TodoProvider from "./context/Context";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Done from "./components/Done";
import "./App.css";

function App() {
  return (
    <TodoProvider>
      <Form />
      <Todo />
      <Done />
    </TodoProvider>
  );
}

export default App;
