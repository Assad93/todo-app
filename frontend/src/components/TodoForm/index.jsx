import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import useToDo from "../../hooks/useToDo";
import Button from "../Button";
import { Input, InputGroup } from "./styles";

function TodoForm() {
  const [description, setDescription] = useState("");
  const { insertItem } = useToDo();

  return (
    <InputGroup>
      <Input
        type="text"
        placeholder="Tarefa..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button
        type="button"
        color="#16a085"
        width={50}
        fn={() => insertItem(description, setDescription)}
      >
        <FaPlus />
      </Button>
    </InputGroup>
  );
}

export default TodoForm;
