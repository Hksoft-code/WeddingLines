import React from "react";

const Input = ({ type, name_, value, handleChange, _class, placeholder }) => {
  return (
    <input
      type={type}
      name={name_}
      value={value}
      onChange={handleChange}
      className={_class}
      placeholder={placeholder}
    />
  );
};

export default Input;
