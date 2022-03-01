import React, { useContext, useState } from "react";
import { SortButton, Table, Title } from "./styles";
import TodoItem from "../TodoItem";
import { toDoContext } from "../../store/toDoContext";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortDown,
  FaSortNumericDown,
  FaSortNumericUp,
  FaSortUp,
} from "react-icons/fa";
import useToDo from "../../hooks/useToDo";

function TodoList() {
  const { toDos } = useContext(toDoContext);
  const { listAllDesc, listAll, listAllAlphaOrderAsc, listAllAlphaOrderDesc } =
    useToDo();
  const [ascSorted, isAscSorted] = useState(true);
  const [dateAscSorted, isDateAscSorted] = useState(true);

  const alphabeticalOrderAscSort = async () => {
    await listAllAlphaOrderAsc();
    isAscSorted(true);
  };

  const alphabeticalOrderDescSort = async () => {
    await listAllAlphaOrderDesc();
    isAscSorted(false);
  };

  const dateAscSort = async () => {
    await listAll();
    isDateAscSorted(true);
  };

  const dateDescSort = async () => {
    await listAllDesc();
    isDateAscSorted(false);
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>
            <Title>
              Descrição
              <SortButton>
                {ascSorted ? (
                  <FaSortAlphaDown
                    size={30}
                    color="#16a085"
                    onClick={() => alphabeticalOrderDescSort()}
                  />
                ) : (
                  <FaSortAlphaUp
                    size={30}
                    color="#16a085"
                    onClick={() => alphabeticalOrderAscSort()}
                  />
                )}
              </SortButton>
            </Title>
          </th>
          <th>
            <Title>
              Data de Criação
              <SortButton>
                {dateAscSorted ? (
                  <FaSortNumericDown
                    size={30}
                    color="#16a085"
                    onClick={() => dateDescSort()}
                  />
                ) : (
                  <FaSortNumericUp
                    size={30}
                    color="#16a085"
                    onClick={() => dateAscSort()}
                  />
                )}
              </SortButton>
            </Title>
          </th>
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
