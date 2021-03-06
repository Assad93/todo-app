import React from "react";
import ReactDOM from "react-dom";
import useToDo from "../../../hooks/useToDo";
import Button from "../../Button";
import {
  Body,
  Content,
  Description,
  Footer,
  Header,
  Modal,
  Title,
} from "../styles";

function DeleteDialog({ show, onClose, item }) {
  const { deleteItem } = useToDo();

  const deleteToDo = async () => {
    await deleteItem(item._id);
    onClose();
  };

  return ReactDOM.createPortal(
    <Modal onClick={onClose} show={show}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Deletar Tarefa</Title>
        </Header>
        <Body>
          <Description>Tem certeza que deseja deletar esta tarefa?</Description>
        </Body>
        <Footer>
          <Button color="#c0392b" fn={onClose}>
            Cancelar
          </Button>
          <Button color="#16a085" fn={deleteToDo}>
            Confirmar
          </Button>
        </Footer>
      </Content>
    </Modal>,
    document.getElementById("root")
  );
}

export default DeleteDialog;
