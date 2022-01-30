import React, { useEffect, useState } from "react";
import { Table } from "./styles";
import TodoItem from "../TodoItem";
import axios from "axios";

function TodoList() {
  const [toDos, setToDos] = useState([]);

  const fecthToDos = async () => {
    const { data } = await axios.get(`http://localhost:3003/api/todos`);
    setToDos(data);
    console.log(toDos);
  };

  useEffect(() => {
    fecthToDos();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {toDos?.map((toDo) => {
          return <TodoItem key={toDo._id} description={toDo.description} />;
        })}
      </tbody>
    </Table>
  );
}

export default TodoList;
