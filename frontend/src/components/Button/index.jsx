import React from "react";

import { ActionButton } from "./styles";

function Button({ children, color }) {
  return <ActionButton color={color}>{children}</ActionButton>;
}

export default Button;
