import { useContexts } from "../context";

const Form = () => {
  const { todo, setTodo, addTodo, btn } = useContexts();
  return (
    <form onSubmit={(e) => addTodo(e)}>
      <input
        value={todo.todos}
        onChange={(e) => setTodo({ ...todo, todos: e.target.value })}
        type="text"
        placeholder="enter todo..."
      />
      <button type="submit">{btn}</button>
    </form>
  );
};

export default Form;
