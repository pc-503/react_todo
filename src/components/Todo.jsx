import { useRef } from "react";
import { useTodoContext, useDispatchContext } from "../context/Context";

const Todo = () => {
  const [todos] = useTodoContext();
  const [todoDispatch, doneDispatch] = useDispatchContext();
  const inputRef = useRef();

  const editStart = (id) => {
    const targetTodo = todos.find((todo) => todo.id === id);
    targetTodo.edit = true;
    todoDispatch({ type: "edit", todo: targetTodo });
  };

  const editComplete = (id, content) => {
    if (content === "") return;
    const targetTodo = todos.find((todo) => todo.id === id);
    targetTodo.content = content;
    targetTodo.edit = false;
    todoDispatch({ type: "edit", todo: targetTodo });
  };

  const todoComplete = (id) => {
    const targetTodo = todos.find((todo) => todo.id === id);
    todoDispatch({ type: "delete", todo: targetTodo });
    doneDispatch({ type: "add", done: targetTodo });
  };

  return (
    <div>
      <h2>Todo</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.content}</span>
            <button onClick={() => editStart(todo.id)}>編集</button>
            <button onClick={() => todoComplete(todo.id)}>完了</button>
            {todo.edit && (
              <div>
                <input type="text" ref={inputRef} />
                <button
                  onClick={() => editComplete(todo.id, inputRef.current.value)}
                >
                  編集完了
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
