import { useRef } from "react";
import { useDispatchContext } from "../context/Context";

const Form = () => {
  const [todoDispatch] = useDispatchContext();
  const inputRef = useRef();

  const createTodo = (e, content) => {
    e.preventDefault();
    if (content === '') return;
    const todo = {
      id: Math.floor(Math.random() * 1000),
      content,
      edit: false,
    };
    todoDispatch({ type: "add", todo });
    inputRef.current.value = '';
  };

  return (
    <form>
      <input type="text" ref={inputRef} />
      <button onClick={(e) => createTodo(e, inputRef.current.value)}>作成</button>
    </form>
  );
};

export default Form;
