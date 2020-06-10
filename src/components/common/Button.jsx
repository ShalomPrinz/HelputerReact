import React from "react";

function Button({ children, color = "primary", disabled, onClick }) {
  return (
    <button
      className={`col-3 mx-2 btn btn-lg btn-${color}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
