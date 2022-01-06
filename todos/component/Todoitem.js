import { FiEdit, FiTrash } from "react-icons/fi";
import { useContexts } from "../context";

const Todoitem = ({ items }) => {
  const { deleteTodo, editTodo } = useContexts();
  return (
    <div className="todo-item" style={{ backgroundColor: `${items.bg}` }}>
      <h4>{items.todo}</h4>
      <section className="action">
        <FiEdit onClick={() => editTodo(items)} className="icon" />
        <FiTrash onClick={() => deleteTodo(items.id)} className="icon" />
      </section>
    </div>
  );
};

export default Todoitem;
