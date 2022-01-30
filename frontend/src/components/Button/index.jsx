import React from "react";

import { ActionButton } from "./styles";

function Button({ children, color, fn, disabled }) {
  return (
    <ActionButton color={color} onClick={() => fn()} disabled={disabled}>
      {children}
    </ActionButton>
  );
}

export default Button;
