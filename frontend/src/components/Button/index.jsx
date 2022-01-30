import React from "react";

import { ActionButton } from "./styles";

function Button({ children, color, fn }) {
  return (
    <ActionButton color={color} onClick={() => fn()}>
      {children}
    </ActionButton>
  );
}

export default Button;
