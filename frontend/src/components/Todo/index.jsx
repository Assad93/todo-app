import React from "react";
import PageHeader from "../PageHeader";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import { Container, Header } from "./styles";

function Todo() {
  return (
    <Container>
      <Header>
        <PageHeader title={"Lista"} small="Tarefas" />
        <TodoForm />
      </Header>
      <TodoList />
    </Container>
  );
}

export default Todo;
