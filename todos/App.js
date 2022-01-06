import "./component/index.css";
import Form from "./component/Form";
import Todo from "./component/Todo";

export default function App() {
  return (
    <div className="container">
      <Form />
      <Todo />
    </div>
  );
}
