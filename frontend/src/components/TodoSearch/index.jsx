import React, { useContext, useEffect, useRef, useState } from "react";
import Input from "../Input";
import { IconContainer, InputSearch, SearchIcon, SearchInput } from "./styles";
import { toDoContext } from "../../store/toDoContext";
import useToDo from "../../hooks/useToDo";

function TodoSearch() {
  const { setToDos } = useContext(toDoContext);
  const [search, setSearch] = useState("");
  const { filterToDos } = useToDo();
  let timeoutRef = useRef(null);
  let mountRef = useRef(false);

  const handleSearchInput = async (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    function debouncedSearch() {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(async () => {
        const toDosInBD = await filterToDos(search);
        console.log(toDosInBD);
        setToDos(toDosInBD);
      }, 300);
    }

    if (mountRef.current) {
      debouncedSearch();
    }

    mountRef.current = true;
  }, [search]);

  return (
    <InputSearch>
      <SearchInput
        placeholder="Buscar..."
        onChange={handleSearchInput}
        value={search}
      />
      <IconContainer>
        <SearchIcon />
      </IconContainer>
    </InputSearch>
  );
}

export default TodoSearch;
