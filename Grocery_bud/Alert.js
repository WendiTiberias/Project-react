import React from "react";
const Alert = React.memo(({ msg, variant }) => {
  return (
    <div
      className="alert"
      style={{
        marginBottom: "14px",
        padding: "0.30rem",
        textAlign: "center",
        background: variant,
      }}
    >
      <h5>{msg}</h5>
    </div>
  );
});

export default Alert;
