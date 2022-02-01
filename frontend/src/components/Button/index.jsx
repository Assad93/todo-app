import React from "react";

import { ActionButton } from "./styles";

function Button({ children, color, width, fn, disabled }) {
  return (
    <ActionButton
      color={color}
      width={width}
      onClick={() => fn()}
      disabled={disabled}
    >
      {children}
    </ActionButton>
  );
}

export default Button;
