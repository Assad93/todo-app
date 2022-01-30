import React from "react";
import { Small, Title } from "./styles";

function PageHeader({ title, small }) {
  return (
    <header>
      <h2>
        <Title>{title}</Title> <Small>{small}</Small>
      </h2>
    </header>
  );
}

export default PageHeader;
