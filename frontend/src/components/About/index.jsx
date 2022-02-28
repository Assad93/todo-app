import React from "react";
import PageHeader from "../PageHeader";
import { Container, Description, Header } from "./styles";

function About() {
  return (
    <Container>
      <Header>
        <PageHeader title={"Sobre Nós"} />
      </Header>
      <Description>
        Com o To Do App você consegue listar suas tarefas diárias! Essa
        aplicação foi feita para por em prática meus conhecimentos em React,
        foram trabalhados vários conceitos como Hooks, Css-in-js, integração com
        API Backend, criação de dialogs, ordenação de dados, filtragem de dados,
        entre outros tantos conceitos. Fique a vontade para navegar pela
        aplicação e me retornar feedback através do repositório no github.
      </Description>
    </Container>
  );
}

export default About;
