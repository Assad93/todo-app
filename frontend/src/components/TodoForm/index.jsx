import axios from "axios";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Button from "../Button";
import { Input, InputGroup } from "./styles";

function TodoForm({ fnUpdate }) {
  const [description, setDescription] = useState("");

  const saveDescription = async () => {
    await axios.post("http://localhost:3003/api/todos", {
      description: description,
    });
    setDescription("");
    fnUpdate();
  };

  return (
    <InputGroup>
      <Input
        type="text"
        placeholder="Tarefa..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button type="button" color="#16a085" fn={saveDescription}>
        <FaPlus />
      </Button>
    </InputGroup>
  );
}

export default TodoForm;
