import React from "react";
import Button from "../Button";
import Input from "../Input";
import { FaSearch } from "react-icons/fa";
import { InputSearch } from "./styles";

function TodoSearch() {
  return (
    <InputSearch>
      <Input placeholder="Buscar..." />
      <Button width={50} color="#16a085">
        <FaSearch />
      </Button>
    </InputSearch>
  );
}

export default TodoSearch;
