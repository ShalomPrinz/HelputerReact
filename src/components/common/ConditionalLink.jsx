import React from "react";
import { Link } from "react-router-dom";

function ConditionalLink({
  className,
  headline = false,
  text,
  to,
  condition = to,
}) {
  const TextComponent = headline ? <h4>{text}</h4> : text;

  if (condition)
    return (
      <Link
        className={`text-center text-dark text-decoration-none ${className}`}
        to={to}
      >
        {TextComponent}
      </Link>
    );
  else return <>{TextComponent}</>;
}

export default ConditionalLink;
