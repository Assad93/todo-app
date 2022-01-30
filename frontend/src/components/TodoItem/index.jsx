import axios from "axios";
import React, { useState } from "react";
import { FaCheck, FaEdit, FaTrash, FaFlagCheckered } from "react-icons/fa";
import Button from "../Button";
import { Description, Td } from "./styles";

function TodoItem({ item, fnUpdate }) {
  const [done, isDone] = useState(item.done);

  const deleteItem = async () => {
    await axios.delete(`http://localhost:3003/api/todos/${item._id}`);
    fnUpdate();
  };

  const checkItem = async () => {
    await axios.put(`http://localhost:3003/api/todos/${item._id}`, {
      done: true,
    });
    isDone(true);
  };

  return (
    <tr>
      <td>
        <Description disabled={done}>{item.description}</Description>
      </td>
      <Td>
        <Button
          color={done ? "#7f8c8d" : "#16a085"}
          fn={checkItem}
          disabled={done}
        >
          {!done ? <FaCheck /> : <FaFlagCheckered />}
        </Button>
        <Button color="#2980b9">
          <FaEdit />
        </Button>
        <Button color="#c0392b" fn={deleteItem}>
          <FaTrash />
        </Button>
      </Td>
    </tr>
  );
}

export default TodoItem;
