import React from "react";

const Search = ({ onChange, value }) => (
  <input
    type="text"
    placeholder="Search..."
    value={value}
    className="form-control my-3"
    onChange={(e) => onChange(e.currentTarget.value)}
  />
);

export default Search;
