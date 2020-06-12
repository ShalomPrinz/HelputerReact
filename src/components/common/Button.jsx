import React from "react";

function Button({
  autocol = true,
  children,
  color = "primary",
  disabled,
  onClick,
}) {
  return (
    <button
      className={`${autocol ? "col-4" : ""} mx-2 my-2 btn btn-lg btn-${color}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
