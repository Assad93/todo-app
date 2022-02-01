import axios from "axios";
import { useContext } from "react";
import { toDoContext } from "../store/toDoContext";

const useToDo = () => {
  const { setToDos } = useContext(toDoContext);

  const listAll = async () => {
    const { data } = await axios.get(`http://localhost:3003/api/todos`);
    setToDos(data);
  };

  const insertItem = async (description, setDescription) => {
    await axios.post("http://localhost:3003/api/todos", {
      description: description,
    });
    setDescription("");
    listAll();
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:3003/api/todos/${id}`);
    listAll();
  };

  const updateItem = async (id, description) => {
    await axios.put(`http://localhost:3003/api/todos/${id}`, {
      description: description,
    });
    listAll();
  };

  const checkItem = async (id) => {
    await axios.put(`http://localhost:3003/api/todos/${id}`, {
      done: true,
    });
    listAll();
  };

  return {
    listAll,
    insertItem,
    deleteItem,
    updateItem,
    checkItem,
  };
};

export default useToDo;
