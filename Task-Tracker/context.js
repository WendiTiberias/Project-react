import axios from "axios";
import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

const Context = createContext();

const Provider = (props) => {
  const [query, setQuery] = useState({
    id: "",
    task: "",
    toggle: false,
    author: "",
  });
  const [item, setItem] = useState([]);
  const emptyQuery = () => {
    return {
      id: "",
      task: "",
      toggle: false,
      author: "",
    };
  };

  const get_task = async () => {
    const getReq = await axios.get("http://localhost:5000/posts");
    const { data } = await getReq;
    setItem(data);
  };

  const post_task = async () => {
    const postReq = await axios.post("http://localhost:5000/posts", {
      ...query,
      id: Math.floor(Math.random() * 10000),
    });

    setQuery(emptyQuery());
    return await get_task();
  };

  const onToggle = async (query) => {
    let finder;
    if (query.toggle == false) {
      finder = { ...query, toggle: true };
    } else {
      finder = { ...query, toggle: false };
    }

    await axios.put(`http://localhost:5000/posts/${query.id}`, finder);
    return await get_task();
  };

  const delete_task = async (id) => {
    const deleteReq = await axios.delete("http://localhost:5000/posts/" + id);
    return await get_task();
  };

  useEffect(() => {
    return get_task();
  }, []);

  return (
    <Context.Provider
      value={{ onToggle, delete_task, post_task, item, query, setQuery }}
    >
      {props.children}
    </Context.Provider>
  );
};

const useHandler = () => {
  return useContext(Context);
};

export { Provider, useHandler };
