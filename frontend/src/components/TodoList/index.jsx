import React from "react";
import { Table } from "./styles";
import TodoItem from "../TodoItem";

function TodoList({ list }) {
  return (
    <Table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {list?.map((item) => {
          return <TodoItem key={item._id} description={item.description} />;
        })}
      </tbody>
    </Table>
  );
}

export default TodoList;
