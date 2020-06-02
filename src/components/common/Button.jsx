import React from "react";

function Button({ children, disabled, onClick }) {
  return (
    <button
      className="col-3 mx-2 btn btn-lg btn-primary"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
