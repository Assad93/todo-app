import React from "react";
import { StyledInput } from "./styles";

function Input({ type, placeholder, value, onChange }) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
