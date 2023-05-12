import { useTodoContext, useDispatchContext } from "../context/Context";

const Done = () => {
  const [, done] = useTodoContext();
  const [todoDispatch, doneDispatch] = useDispatchContext();

  const doneReturn = (id) => {
    const targetDone = done.find((_done) => _done.id === id);
    doneDispatch({ type: "delete", done: targetDone });
    todoDispatch({ type: "add", todo: targetDone });
  };

  const doneDelete = (id) => {
    const targetDone = done.find((_done) => _done.id === id);
    doneDispatch({ type: "delete", done: targetDone });
  };

  return (
    <div>
      <h2>Done</h2>
      <ul>
        {done.map((_done) => (
          <li key={_done.id}>
            <span>{_done.content}</span>
            <button onClick={() => doneReturn(_done.id)}>戻す</button>
            <button onClick={() => doneDelete(_done.id)}>削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Done;
