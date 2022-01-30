import React from "react";
import { FaRegCalendarTimes } from "react-icons/fa";
import { Brand, NavBar, NavMenu } from "./styles";

function Menu() {
  return (
    <NavBar>
      <Brand>
        <FaRegCalendarTimes /> <span>To Do App</span>
      </Brand>
      <NavMenu>
        <li>
          <a href="/todos">Todo's</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
      </NavMenu>
    </NavBar>
  );
}

export default Menu;
