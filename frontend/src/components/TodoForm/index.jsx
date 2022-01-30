import React from "react";
import { FaPlus } from "react-icons/fa";
import Button from "../Button";
import { Input, InputGroup } from "./styles";

function TodoForm() {
  return (
    <form>
      <InputGroup>
        <Input type="text" placeholder="Tarefa..." />
        <Button color="#16a085">
          <FaPlus />
        </Button>
      </InputGroup>
    </form>
  );
}

export default TodoForm;
