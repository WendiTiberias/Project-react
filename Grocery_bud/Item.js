import "./App.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import React from "react";
const GroceryItem = React.memo(({ onDelete, item, onEdit }) => {
  if (item && item.length > 0) {
    localStorage.setItem("grocery", JSON.stringify(item));
    return (
      <div className="grocery-item">
        {item.map((finder, key) => {
          return (
            <div key={key} className="grocery-list">
              <h4>{finder.grocery}</h4>
              <section className="action">
                <FaEdit
                  onClick={() => onEdit(finder)}
                  style={{
                    cursor: "pointer",
                    marginRight: "14px",
                    color: "seagreen",
                  }}
                />
                <FaTrash
                  onClick={() => onDelete(finder.id)}
                  style={{ cursor: "pointer", color: "crimson" }}
                />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return "";
  }
});

export default GroceryItem;
