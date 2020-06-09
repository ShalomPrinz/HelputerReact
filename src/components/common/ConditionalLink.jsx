import React from "react";
import { Link } from "react-router-dom";

function ConditionalLink({
  className,
  headline = false,
  text,
  to,
  condition = to,
}) {
  const style = `text-center text-dark text-decoration-none ${className}`;

  const TextComponent = headline ? <h4 className={style}>{text}</h4> : text;

  if (condition)
    return (
      <Link className={style} to={to}>
        {TextComponent}
      </Link>
    );
  else return <>{TextComponent}</>;
}

export default ConditionalLink;
