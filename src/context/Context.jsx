import { useContext, createContext, useReducer } from "react";

const StateContext = createContext();
const DispatchContext = createContext();
const useTodoContext = () => useContext(StateContext);
const useDispatchContext = () => useContext(DispatchContext);

const todoRecuder = (state, { type, todo }) => {
  switch (type) {
    case "add":
      return [...state, todo];
    case "edit":
      const newState = replacement(state, todo, type);
      return [...newState];
    case "delete":
      const remainState = replacement(state, todo, type);
      return [...remainState];
  }
};

const doneReducer = (state, { type, done }) => {
  switch (type) {
    case "add":
      return [...state, done];
    case "delete":
      const remainState = replacement(state, done, type);
      return [...remainState];
  }
};

const replacement = (state, target, type) => {
  switch (type) {
    case "edit":
      return state.map((_state) => {
        if (_state.id === target.id) {
          return target;
        }
        return _state;
      });
    case "delete":
      return state.filter((_state) => _state.id !== target.id);
  }
};

const TodoProvider = ({ children }) => {
  const [todos, todoDispatch] = useReducer(todoRecuder, []);
  const [done, doneDispatch] = useReducer(doneReducer, []);

  return (
    <StateContext.Provider value={[todos, done]}>
      <DispatchContext.Provider value={[todoDispatch, doneDispatch]}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export { useTodoContext, useDispatchContext };
export default TodoProvider;
