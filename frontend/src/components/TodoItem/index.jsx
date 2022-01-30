import React from "react";
import { FaCheck, FaEdit, FaTrash } from "react-icons/fa";
import Button from "../Button";
import { Td } from "./styles";

function TodoItem({ description }) {
  return (
    <tr>
      <td>{description}</td>
      <Td>
        <Button>
          <FaCheck color="#16a085" />
        </Button>
        <Button color="#2980b9">
          <FaEdit />
        </Button>
        <Button color="#c0392b">
          <FaTrash />
        </Button>
      </Td>
    </tr>
  );
}

export default TodoItem;