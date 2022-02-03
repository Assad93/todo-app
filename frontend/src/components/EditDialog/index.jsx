import React, { useState } from "react";
import ReactDOM from "react-dom";
import useToDo from "../../hooks/useToDo";
import Button from "../Button";
import Input from "../Input";
import { Body, Content, Footer, Header, Modal, Title } from "./styles";

function EditDialog({ show, onClose, item }) {
  const [description, setDescription] = useState(item.description);
  const { updateItem } = useToDo();

  const updateToDo = async () => {
    await updateItem(item._id, description);
    onClose();
  };

  return ReactDOM.createPortal(
    <Modal onClick={onClose} show={show}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Editar Tarefa</Title>
        </Header>
        <Body>
          <Input
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Body>
        <Footer>
          <Button color="#c0392b" fn={onClose}>
            Cancelar
          </Button>
          <Button color="#16a085" fn={updateToDo}>
            Confirmar
          </Button>
        </Footer>
      </Content>
    </Modal>,
    document.getElementById("root")
  );
}

export default EditDialog;
