import { useHandler } from "./context";
const Form = () => {
  const { setQuery, query, post_task } = useHandler();
  return (
    <div className="form">
      <div className="form-control">
        <h5>Task</h5>
        <input
          value={query.task}
          onChange={(e) => setQuery({ ...query, task: e.target.value })}
          type="text"
          placeholder="enter task.."
        />
      </div>
      <div className="form-control">
        <h5>Author</h5>
        <input
          value={query.author}
          onChange={(e) => setQuery({ ...query, author: e.target.value })}
          type="text"
          placeholder="enter Author.."
        />
      </div>
      <div className="form-check">
        <input
          value={query.toggle}
          onChange={(e) => setQuery({ ...query, toggle: e.target.checked })}
          type="checkbox"
        />
        <h5>Reminder</h5>
      </div>
      <button onClick={post_task} type="submit">
        Submit Task
      </button>
    </div>
  );
};

export default Form;
