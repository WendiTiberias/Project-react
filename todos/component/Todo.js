import { useContexts } from "../context";
import Todoitem from "./Todoitem";
import Loading from "./Loading";

const Todo = () => {
  const { store, deleteTodo, editTodo } = useContexts();
  localStorage.setItem("todo", JSON.stringify(store || []));
  if (!store || store.length == 0) {
    return <Loading />;
  } else {
    return (
      <div className="todos">
        {store.map((items, key) => {
          return <Todoitem items={items} key={key} />;
        })}
      </div>
    );
  }
};

export default Todo;
