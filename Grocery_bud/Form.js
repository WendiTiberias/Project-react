import "./App.css";
import React from "react";
const Form = React.memo(({ value, onUpdate, query, name }) => {
  const submitHandler = () => {
    if (query === "") {
      alert("please complete form");
    } else {
      onUpdate();
    }
  };
  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler();
      }}
    >
      <input
        value={value}
        onChange={(e) => query(e.target.value)}
        type="text"
        placeholder="enter grocery"
      />
      <button type="submit">{name}</button>
    </form>
  );
});

export default Form;
