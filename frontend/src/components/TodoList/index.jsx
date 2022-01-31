import React, { useContext } from "react";
import { Table } from "./styles";
import TodoItem from "../TodoItem";
import { toDoContext } from "../../store/toDoContext";

function TodoList() {
  const { toDos } = useContext(toDoContext);

  return (
    <Table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {toDos?.map((item) => {
          return <TodoItem key={item._id} item={item} />;
        })}
      </tbody>
    </Table>
  );
}

export default TodoList;
