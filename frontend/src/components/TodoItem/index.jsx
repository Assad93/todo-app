import React from "react";
import { FaCheck, FaEdit, FaTrash, FaFlagCheckered } from "react-icons/fa";
import useToDo from "../../hooks/useToDo";
import Button from "../Button";
import { Description, Td } from "./styles";

function TodoItem({ item }) {
  const { deleteItem, checkItem } = useToDo();

  return (
    <tr>
      <td>
        <Description disabled={item.done}>{item.description}</Description>
      </td>
      <Td>
        <Button
          color={item.done ? "#7f8c8d" : "#16a085"}
          fn={() => checkItem(item._id)}
          disabled={item.done}
        >
          {!item.done ? <FaCheck /> : <FaFlagCheckered />}
        </Button>
        <Button color="#2980b9">
          <FaEdit />
        </Button>
        <Button color="#c0392b" fn={() => deleteItem(item._id)}>
          <FaTrash />
        </Button>
      </Td>
    </tr>
  );
}

export default TodoItem;
