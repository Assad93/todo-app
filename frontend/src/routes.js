import React from "react";
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import About from "./components/About";
import Todo from "./components/Todo";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/todos" element={<Todo />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Todo />} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
