import { FaTrash, FaEdit } from "react-icons/fa";
import { useHandler } from "./context";

const TaskTracker = () => {
  const { item, delete_task, onToggle } = useHandler();
  if (item.length < 1) {
    return (
      <div className="error">
        <h3>No Task Here</h3>
      </div>
    );
  }

  return (
    <div className="task">
      {item.map((items, key) => {
        return (
          <div
            key={key}
            onDoubleClick={() => onToggle(items)}
            className={`task-item ${items.toggle ? "reminder" : ""}`}
          >
            <h4>{items.task}</h4>
            <section className="btn-list">
              <FaTrash
                onClick={() => delete_task(items.id)}
                style={{ color: "crimson", cursor: "pointer" }}
              />
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default TaskTracker;
