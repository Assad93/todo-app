import { createContext } from "react";

const initialState = {
  toDos: [],
  setToDos: () => {},
};

export const toDoContext = createContext(initialState);
