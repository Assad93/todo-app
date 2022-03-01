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

function CheckDialog({ show, onClose, item }) {
  const { checkItem } = useToDo();

  const checkToDo = async () => {
    await checkItem(item._id);
    onClose();
  };

  return ReactDOM.createPortal(
    <Modal onClick={onClose} show={show}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Header>
          <Title>Finalizar Tarefa</Title>
        </Header>
        <Body>
          <Description>
            Tem certeza que deseja finalizar esta tarefa?
          </Description>
        </Body>
        <Footer>
          <Button color="#c0392b" fn={onClose}>
            Cancelar
          </Button>
          <Button color="#16a085" fn={checkToDo}>
            Confirmar
          </Button>
        </Footer>
      </Content>
    </Modal>,
    document.getElementById("root")
  );
}

export default CheckDialog;
