import { set } from "mongoose";
import { useEffect, useState, useContext, createContext } from "react";

const Context = createContext();
const bgRandom = ["#0fb9b1", "#fa8231", "##2e86de", "#fc5c65", "#7d5fff"];

function useContexts() {
  return useContext(Context);
}

const Provider = (props) => {
  const [todo, setTodo] = useState({ todos: "", id: "" });
  const [btn, setBtn] = useState("Submit");
  const [store, setStore] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  function randomBg() {
    const random = Math.floor(Math.random() * bgRandom.length);
    return random;
  }

  const clearTodo = () => {
    return setTodo({ id: "", todos: "" });
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (todo === "") {
      return alert("please complete form");
    } else {
      if (btn === "Submit") {
        const id = Math.floor(Math.random() * 1000000) + 1;
        return setStore([...store, { id, todo, bg: bgRandom[randomBg()] }]);
      }

      const maps = store.map((item) => {
        return item.id == todo.id ? { ...item, todo: todo.todos } : item;
      });
      setStore(maps);
      localStorage.setItem("todo", JSON.stringify(maps));
    }
    clearTodo();
  };

  const deleteTodo = (id) => {
    const del = store.filter((item) => (item.id !== id ? item : ""));
    setStore(del);
    localStorage.setItem("todo", JSON.stringify(del));
  };

  const editTodo = (query) => {
    setTodo({ id: query.id, todos: query.todo });
    setBtn("Edit");
  };

  return (
    <Context.Provider
      value={{ editTodo, deleteTodo, addTodo, setTodo, todo, store, btn }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Provider, useContexts };
