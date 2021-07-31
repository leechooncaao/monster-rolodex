import React from "react";

import "./search-box.styles.css";

type Props = {
  placeholder: string;
  handleChange: React.ChangeEventHandler;
};

const SearchBox: React.FC<Props> = ({ placeholder, handleChange }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default SearchBox;
