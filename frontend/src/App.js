import { useState } from "react";
import Menu from "./components/Menu";
import Routes from "./routes";
import { toDoContext } from "./store/toDoContext";

import "./styles/global.css";

function App() {
  const [toDos, setToDos] = useState([]);

  const initialState = {
    toDos: toDos,
    setToDos: setToDos,
  };

  return (
    <toDoContext.Provider value={initialState}>
      <Menu />
      <Routes />
    </toDoContext.Provider>
  );
}

export default App;
