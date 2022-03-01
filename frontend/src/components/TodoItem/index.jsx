import React, { useState } from "react";
import { FaCheck, FaEdit, FaTrash, FaFlagCheckered } from "react-icons/fa";
import Button from "../Button";
import CheckDialog from "../Dialogs/CheckDialog";
import DeleteDialog from "../Dialogs/DeleteDialog";
import EditDialog from "../Dialogs/EditDialog";
import { Description, Td } from "./styles";

function TodoItem({ item }) {
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showCheckDialog, setShowCheckDialog] = useState(false);

  const formatDate = () => {
    const date = new Date(item.createdAt);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const formatedDate = day + "-" + month + "-" + year;
    return formatedDate;
  };

  return (
    <>
      <tr>
        <td>
          <Description disabled={item.done}>{item.description}</Description>
        </td>
        <td>{formatDate()}</td>
        <Td>
          <Button
            color={item.done ? "#7f8c8d" : "#16a085"}
            width={50}
            fn={() => setShowCheckDialog(true)}
            disabled={item.done}
          >
            {!item.done ? <FaCheck /> : <FaFlagCheckered />}
          </Button>
          <Button
            color={item.done ? "#7f8c8d" : "#2980b9"}
            width={50}
            fn={() => setShowEditDialog(true)}
            disabled={item.done}
          >
            <FaEdit />
          </Button>
          <Button
            color="#c0392b"
            width={50}
            fn={() => setShowDeleteDialog(true)}
          >
            <FaTrash />
          </Button>
        </Td>
      </tr>
      <EditDialog
        show={showEditDialog}
        onClose={() => setShowEditDialog(false)}
        item={item}
      />
      <DeleteDialog
        show={showDeleteDialog}
        onClose={() => setShowDeleteDialog(false)}
        item={item}
      />
      <CheckDialog
        show={showCheckDialog}
        onClose={() => setShowCheckDialog(false)}
        item={item}
      />
    </>
  );
}

export default TodoItem;
