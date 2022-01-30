import axios from "axios";
import React, { useEffect, useState } from "react";
import PageHeader from "../PageHeader";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import { Container, Header } from "./styles";

function Todo() {
  const [toDos, setToDos] = useState([]);

  const fecthToDos = async () => {
    const { data } = await axios.get(`http://localhost:3003/api/todos`);
    setToDos(data);
  };

  useEffect(() => {
    fecthToDos();
  }, []);

  return (
    <Container>
      <Header>
        <PageHeader title={"Lista"} small="Tarefas" />
        <TodoForm fnUpdate={fecthToDos} />
      </Header>
      <TodoList list={toDos} fnUpdate={fecthToDos} />
    </Container>
  );
}

export default Todo;
