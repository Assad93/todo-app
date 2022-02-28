import React, { useEffect } from "react";
import useToDo from "../../hooks/useToDo";
import PageHeader from "../PageHeader";
import TodoForm from "../TodoForm";
import TodoList from "../TodoList";
import TodoSearch from "../TodoSearch";
import { Container, Header } from "./styles";

function Todo() {
  const { listAll } = useToDo();

  useEffect(() => {
    const fetchToDos = async () => {
      await listAll();
    };
    fetchToDos();
  }, []);

  return (
    <Container>
      <Header>
        <PageHeader title={"Lista"} small="Tarefas" />
        <TodoSearch />
        <TodoForm />
      </Header>
      <TodoList />
    </Container>
  );
}

export default Todo;
