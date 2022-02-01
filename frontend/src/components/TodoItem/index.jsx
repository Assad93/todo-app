import React, { useState } from "react";
import { FaCheck, FaEdit, FaTrash, FaFlagCheckered } from "react-icons/fa";
import useToDo from "../../hooks/useToDo";
import Button from "../Button";
import EditDialog from "../EditDialog";
import { Description, Td } from "./styles";

function TodoItem({ item }) {
  const [show, setShow] = useState(false);
  const { deleteItem, checkItem } = useToDo();

  return (
    <>
      <tr>
        <td>
          <Description disabled={item.done}>{item.description}</Description>
        </td>
        <Td>
          <Button
            color={item.done ? "#7f8c8d" : "#16a085"}
            width={50}
            fn={() => checkItem(item._id)}
            disabled={item.done}
          >
            {!item.done ? <FaCheck /> : <FaFlagCheckered />}
          </Button>
          <Button
            color={item.done ? "#7f8c8d" : "#2980b9"}
            width={50}
            fn={() => setShow(true)}
            disabled={item.done}
          >
            <FaEdit />
          </Button>
          <Button color="#c0392b" width={50} fn={() => deleteItem(item._id)}>
            <FaTrash />
          </Button>
        </Td>
      </tr>
      <EditDialog show={show} onClose={() => setShow(false)} item={item} />
    </>
  );
}

export default TodoItem;
