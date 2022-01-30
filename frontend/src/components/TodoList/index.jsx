import React from "react";
import Button from "../Button";
import { Table, Td } from "./styles";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";

function TodoList() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Estudar React</td>
          <Td>
            <Button>
              <FaCheck color="#16a085" />
            </Button>
            <Button color="#2980b9">
              <FaEdit />
            </Button>
            <Button color="#c0392b">
              <FaTrash />
            </Button>
          </Td>
        </tr>
        <tr>
          <td>Estudar React</td>
          <Td>
            <Button>
              <FaCheck color="#16a085" />
            </Button>
            <Button color="#2980b9">
              <FaEdit />
            </Button>
            <Button color="#c0392b">
              <FaTrash />
            </Button>
          </Td>
        </tr>
        <tr>
          <td>Estudar React</td>
          <Td>
            <Button>
              <FaCheck color="#16a085" />
            </Button>
            <Button color="#2980b9">
              <FaEdit />
            </Button>
            <Button color="#c0392b">
              <FaTrash />
            </Button>
          </Td>
        </tr>
        <tr>
          <td>Estudar React</td>
          <Td>
            <Button>
              <FaCheck color="#16a085" />
            </Button>
            <Button color="#2980b9">
              <FaEdit />
            </Button>
            <Button color="#c0392b">
              <FaTrash />
            </Button>
          </Td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TodoList;
